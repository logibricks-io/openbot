// Runs the public wire-to-display text path with real catalogs and synthetic errors. No app,
// provider or network is started. The writer keeps released English; screens use the current brand.
// Run: bun scripts/brand-source-text-e2e.ts
// Writes .openbot-build/brand-source-text-e2e/report.json, also when a check fails.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  createTranslate,
  loadLocale,
  type Message,
  type MessageCatalog,
  TRANSLATED_LOCALES,
  translateFor,
} from "@openbot/i18n";
import { mobileTranslateFor } from "@openbot/i18n/mobile";
import {
  isFixedSourceText,
  localizeSourceText,
  matchingSourceKeys,
  sourceText,
  sourceTranslateFor,
} from "@openbot/i18n/source";
import { userErrorMessage } from "@openbot/user-errors";
import {
  appTranslation as lazyAppTranslation,
  sourceTranslation as lazySourceTranslation,
} from "../packages/i18n/src/lazy-catalogs";
import { source } from "../packages/i18n/src/messages/en/source";
import { englishSourceDisplayOverrides } from "../packages/i18n/src/source-display-en";

const OUT = resolve(import.meta.dirname, "../.openbot-build/brand-source-text-e2e");
const sourceCatalog: MessageCatalog = source;
const displayOverrides: MessageCatalog = englishSourceDisplayOverrides;
const wireCatalogSha256 = () => createHash("sha256").update(JSON.stringify(source)).digest("hex");
const ORIGINAL_HASH = wireCatalogSha256();
const PLURAL_FORMS = ["zero", "one", "two", "few", "many", "other"] as const;

interface CheckResult {
  name: string;
  passed: boolean;
  error?: string;
}

const report: {
  passed: boolean;
  overrideCount: number;
  wireCatalogSha256: string;
  checks: CheckResult[];
  samples: Record<string, string>;
} = {
  passed: false,
  overrideCount: Object.keys(displayOverrides).length,
  wireCatalogSha256: ORIGINAL_HASH,
  checks: [],
  samples: {},
};

function check(name: string, run: () => void): void {
  try {
    run();
    report.checks.push({ name, passed: true });
  } catch (error) {
    report.checks.push({ name, passed: false, error: error instanceof Error ? error.message : String(error) });
    throw error;
  }
}

function forms(message: Message): { form: string; text: string }[] {
  if (typeof message === "string") return [{ form: "text", text: message }];
  return PLURAL_FORMS.flatMap((form) => {
    const text = message[form];
    return typeof text === "string" ? [{ form, text }] : [];
  });
}

function placeholders(text: string): string[] {
  return [...new Set([...text.matchAll(/\{(\w+)\}/gu)].map((match) => match[1] ?? ""))].sort();
}

mkdirSync(OUT, { recursive: true });
try {
  for (const locale of TRANSLATED_LOCALES) await loadLocale(locale);
  check("released wire text and fixed-source recognition", () => {
    const wire = sourceText("error.app.notReady");
    assert.equal(wire, "OpenBot is not ready.");
    assert.equal(
      sourceText("error.storage.unreadableFile", { path: "/workspace/OpenBot/report.csv" }),
      "OpenBot cannot read /workspace/OpenBot/report.csv. The file is damaged.",
    );
    assert.ok(isFixedSourceText(wire));
    assert.equal(isFixedSourceText("LogiBricks Workspace is not ready."), false);
    assert.deepEqual(matchingSourceKeys(wire), ["error.app.notReady"]);
    report.samples.wire = wire;
  });

  check("English display uses the registered message", () => {
    const display = localizeSourceText(sourceText("error.app.notReady"), "en");
    assert.equal(display, "LogiBricks Workspace is not ready.");
    assert.equal(sourceTranslateFor("en")("error.app.notReady"), display);
    report.samples.display = display;
  });

  check("desktop, mobile and lazy web catalogs use the same display text", () => {
    const expected = "LogiBricks Workspace is not ready.";
    assert.equal(translateFor("en")("error.app.notReady"), expected);
    assert.equal(mobileTranslateFor("en")("error.app.notReady"), expected);
    assert.equal(lazyAppTranslation("en")?.["error.app.notReady"], expected);
    assert.equal(lazySourceTranslation("en")?.["error.app.notReady"], expected);
  });

  check("user-error messages cover matched text and classified errors", () => {
    assert.equal(
      userErrorMessage(new Error(sourceText("error.app.notReady")), "Fallback", "en"),
      "LogiBricks Workspace is not ready.",
    );
    assert.equal(
      userErrorMessage(new Error("EACCES: access denied"), "Fallback", "en"),
      "LogiBricks Workspace does not have permission to complete this action. Check the file or folder permissions, then try again.",
    );
  });

  check("captured names and paths keep their OpenBot text", () => {
    const name = "OpenBot Operations";
    const path = "/workspace/OpenBot/reports/OpenBot.csv";
    const named = sourceText("error.backend.attachmentCopyFailed", { name });
    const pathMessage = sourceText("error.storage.unreadableFile", { path });
    assert.equal(localizeSourceText(named, "en"), "LogiBricks Workspace could not copy OpenBot Operations.");
    assert.equal(
      userErrorMessage(new Error(named), "Fallback", "en"),
      "LogiBricks Workspace could not copy OpenBot Operations.",
    );
    assert.equal(
      localizeSourceText(pathMessage, "en"),
      "LogiBricks Workspace cannot read /workspace/OpenBot/reports/OpenBot.csv. The file is damaged.",
    );
    report.samples.capturedName = localizeSourceText(named, "en");
    report.samples.capturedPath = localizeSourceText(pathMessage, "en");
  });

  check("unknown provider and user messages stay unchanged", () => {
    for (const text of [
      "Provider remark: OpenBot Project keeps its custom route.",
      "Provider remark: OpenBot is not ready.",
      "My workspace is named OpenBot Personal Notes.",
      "OpenBot Host Manager returned its own diagnostic.",
    ]) {
      assert.deepEqual(matchingSourceKeys(text), []);
      assert.equal(localizeSourceText(text, "en"), text);
      assert.equal(userErrorMessage(new Error(text), "Fallback", "en"), text);
    }
  });

  check("registered nested reasons translate; unknown details and URLs do not", () => {
    const url = "https://example.test/OpenBot/update.zip";
    const registered = sourceText("error.provider.requestFailed", { url, reason: sourceText("error.app.notReady") });
    assert.equal(
      localizeSourceText(registered, "en"),
      "LogiBricks Workspace could not download https://example.test/OpenBot/update.zip. LogiBricks Workspace is not ready.",
    );
    const detail = "Provider remark: OpenBot Project keeps its custom route.";
    const unknown = sourceText("error.provider.requestFailed", { url, reason: detail });
    assert.equal(localizeSourceText(unknown, "en"), `LogiBricks Workspace could not download ${url}. ${detail}`);
    const nested = sourceText("status.remote.stageConnection", { reason: sourceText("error.app.notReady") });
    assert.equal(localizeSourceText(nested, "en"), "Connecting to the desktop: LogiBricks Workspace is not ready.");
    report.samples.nested = localizeSourceText(registered, "en");
  });

  check("external integration names, vault folders and service identity stay unchanged", () => {
    for (const text of [
      sourceText("error.workflow.githubNoAccess"),
      sourceText("error.connector.bitwardenFailed"),
      sourceText("error.site.outsideWorkspace"),
      sourceText("error.remote.serviceRequestFailed"),
    ]) {
      assert.equal(localizeSourceText(text, "en"), text);
    }
    assert.match(localizeSourceText(sourceText("error.workflow.githubNoAccess"), "zh"), /OpenBot GitHub App/u);
    assert.match(localizeSourceText(sourceText("error.workflow.githubNoAccess"), "he"), /OpenBot GitHub App/u);
    assert.match(localizeSourceText(sourceText("error.site.outsideWorkspace"), "he"), /OpenBot Shared/u);
    for (const locale of TRANSLATED_LOCALES) {
      assert.equal(translateFor(locale)("connector.protonPass.vaultName"), "Shared with OpenBot");
      assert.equal(translateFor(locale)("connector.bitwarden.folderName"), "Shared with OpenBot");
    }
    assert.equal(
      localizeSourceText(sourceText("error.remote.directoryUnreachable"), "en"),
      "LogiBricks Workspace could not reach the OpenBot service. Check your connection.",
    );
  });

  check("every override preserves placeholders and plural shape and renders through the matcher", () => {
    const wire = createTranslate({ source: sourceCatalog, locale: "en", sourceLocale: "en" });
    const display = createTranslate({
      source: sourceCatalog,
      translation: displayOverrides,
      locale: "en",
      sourceLocale: "en",
    });
    for (const [key, override] of Object.entries(displayOverrides)) {
      const original = sourceCatalog[key];
      assert.ok(original, `${key} must be a registered source key`);
      assert.equal(typeof override, typeof original, `${key} must keep text/plural shape`);
      const originalForms = forms(original);
      const displayForms = forms(override);
      assert.deepEqual(
        displayForms.map(({ form }) => form),
        originalForms.map(({ form }) => form),
        `${key} must keep its plural forms`,
      );
      for (const form of displayForms) {
        const sourceForm = originalForms.find((candidate) => candidate.form === form.form);
        assert.ok(sourceForm);
        assert.deepEqual(placeholders(form.text), placeholders(sourceForm.text), `${key} must keep its placeholders`);
      }
      const names = [...new Set(originalForms.flatMap(({ text }) => placeholders(text)))];
      for (const count of typeof original === "string" ? [1] : [0, 1, 2]) {
        const values = Object.fromEntries(
          names.map((name) => [name, name === "count" ? count : `Captured OpenBot ${name}`]),
        );
        const written = wire(key, values);
        assert.equal(localizeSourceText(written, "en"), display(key, values), `${key} must use its display override`);
      }
    }
  });

  check("plural source messages keep counts while translating registered nested details", () => {
    for (const count of [0, 1, 2]) {
      const wire = sourceText("status.remote.connectionLostDetail", {
        count,
        detail: sourceText("error.app.notReady"),
      });
      assert.equal(wire, `Connection lost. Retrying in ${count}s.\nOpenBot is not ready.`);
      assert.equal(
        localizeSourceText(wire, "en"),
        `Connection lost. Retrying in ${count}s.\nLogiBricks Workspace is not ready.`,
      );
    }
  });

  check("localization does not mutate the wire catalog", () => {
    assert.equal(wireCatalogSha256(), ORIGINAL_HASH);
    assert.equal(sourceText("error.app.notReady"), "OpenBot is not ready.");
  });
  report.passed = true;
} finally {
  writeFileSync(resolve(OUT, "report.json"), `${JSON.stringify(report, null, 2)}\n`);
}
process.stdout.write(`Checked ${report.overrideCount} display overrides. Wrote ${resolve(OUT, "report.json")}.\n`);

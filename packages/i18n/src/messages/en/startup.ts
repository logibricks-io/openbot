import { defineMessages } from "../../message";

export const messages = defineMessages("startup", {
  // The one native error box: the app could not start, so no renderer exists to show it.
  "startup.failedTitle": "LogiBricks Workspace couldn’t start",
  "startup.failedBody":
    "{message}\n\nYour local data was not reset or overwritten. See the troubleshooting guide for recovery steps.",
  // Shown while OpenBot runs, when another program changed `app.asar`: the next start would fail with no message.
  "startup.archiveChangedTitle": "LogiBricks Workspace files were changed",
  "startup.archiveChangedBody":
    "Another program changed the LogiBricks Workspace file app.asar. LogiBricks Workspace runs now, but it will not open after you quit it.\n\nTo repair LogiBricks Workspace, install it again. Your local data stays.",
  "startup.archiveChangedDownload": "Download LogiBricks",
  // An older OpenBot started over data that a newer one migrated: it installs the latest release.
  "startup.newerDataUpdatingTitle": "Updating LogiBricks Workspace",
  "startup.newerDataUpdatingBody":
    "A newer version of LogiBricks Workspace saved your data. LogiBricks Workspace installs the latest version and then opens again.\n\nYour local data was not reset or overwritten.",
  "startup.newerDataTitle": "Install the latest LogiBricks Workspace",
  "startup.newerDataBody":
    "A newer version of LogiBricks Workspace saved your data, and this version ({version}) cannot open it. Install the latest version to open your data.\n\nYour local data was not reset or overwritten.",
  "startup.newerDataDownload": "Download LogiBricks Workspace",
  "startup.newerDataGuide": "Open guide",
  "startup.newerDataQuit": "Quit",
});

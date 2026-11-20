import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "LogiBricks Workspace לא הצליח להיפתח",
  "startup.failedBody":
    "{message}\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו. בצעדי השחזור שבמדריך לפתרון בעיות אפשר לקרוא איך להמשיך.",
  "startup.archiveChangedTitle": "קובצי LogiBricks Workspace שונו",
  "startup.archiveChangedBody":
    "תוכנה אחרת שינתה את קובץ LogiBricks Workspace app.asar. LogiBricks Workspace פועל כעת, אך לא ייפתח לאחר היציאה ממנו.\n\nכדי לתקן את LogiBricks Workspace, יש להתקין אותו מחדש. הנתונים המקומיים נשמרים.",
  "startup.archiveChangedDownload": "הורדת LogiBricks Workspace",
  "startup.filesDamagedBody":
    "חלק מקובצי LogiBricks Workspace פגומים או חסרים.\n\nכדי לתקן את LogiBricks Workspace, יש להתקין אותו מחדש. הנתונים המקומיים נשמרים.",
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace מתעדכן",
  "startup.newerDataUpdatingBody":
    "גרסה חדשה יותר של LogiBricks Workspace שמרה את הנתונים שלך. LogiBricks Workspace מתקין את הגרסה האחרונה ואז נפתח מחדש.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataTitle": "התקנת LogiBricks Workspace העדכני ביותר",
  "startup.newerDataBody":
    "גרסה חדשה יותר של LogiBricks Workspace שמרה את הנתונים שלך, והגרסה הזו ({version}) אינה יכולה לפתוח אותם. יש להתקין את הגרסה האחרונה כדי לפתוח את הנתונים.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataDownload": "הורדת LogiBricks Workspace",
  "startup.newerDataGuide": "פתיחת המדריך",
  "startup.newerDataQuit": "יציאה",
  "startup.newerDataLoopTitle": "הגרסה האחרונה של LogiBricks Workspace לא נפתחה",
  "startup.newerDataLoopBody":
    "גרסה חדשה יותר של LogiBricks Workspace שמרה את הנתונים שלך, והגרסה הזו ({version}) אינה יכולה לפתוח אותם. LogiBricks Workspace {loopVersion} נעצר לפני שנפתח כמה פעמים ברצף, ולכן הוא לא יותקן שוב.\n\nיש להתקין גרסה חדשה יותר מ-{loopVersion} כשתהיה זמינה. לקבלת עזרה, יש לפתוח את המדריך.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataReleases": "הצגת הגרסאות",
  "startup.recoveryWindowTitle": "שחזור LogiBricks Workspace",
  "startup.recoveryTitle": "LogiBricks Workspace לא נפתח",
  "startup.recoveryBody": {
    one: "LogiBricks Workspace {version} נעצר לפני שנפתח, פעם אחת ({count}). הנתונים המקומיים שלך לא אופסו ולא נדרסו.",
    two: "LogiBricks Workspace {version} נעצר לפני שנפתח, פעמיים ברצף ({count}). הנתונים המקומיים שלך לא אופסו ולא נדרסו.",
    other:
      "LogiBricks Workspace {version} נעצר לפני שנפתח, {count} פעמים ברצף. הנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  },
  "startup.recoveryHint":
    "נסה שוב, או התקן את הגרסה האחרונה שנפתחה. לקבלת עזרה, ייצא את נתוני האבחון ושלח את הקובץ עם הדיווח שלך.",
  "startup.recoveryHintLatest":
    "LogiBricks Workspace לא מצא גרסה קודמת שיכולה לפתוח את הנתונים שלך. נסה שוב, או התקן את הגרסה האחרונה. לקבלת עזרה, ייצא את נתוני האבחון ושלח את הקובץ עם הדיווח שלך.",
  "startup.recoveryRetry": "נסה שוב",
  "startup.recoveryPreviousVersion": "הורדת הגרסה הקודמת",
  "startup.recoveryLatestVersion": "הורדת הגרסה האחרונה",
  "startup.recoveryExportDiagnostics": "ייצוא אבחון",
  "startup.recoveryOpenDataFolder": "פתיחת תיקיית הנתונים",
  "startup.recoveryQuit": "יציאה",
  "startup.recoveryDiagnosticsSaved": "קובץ האבחון נשמר.",
  "startup.recoveryActionFailed": "LogiBricks Workspace לא הצליח לבצע את הפעולה הזו.",
} as const satisfies PartialTranslation<typeof source>;

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
  "startup.newerDataUpdatingTitle": "LogiBricks Workspace מתעדכן",
  "startup.newerDataUpdatingBody":
    "גרסה חדשה יותר של LogiBricks Workspace שמרה את הנתונים שלך. LogiBricks Workspace מתקין את הגרסה האחרונה ואז נפתח מחדש.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataTitle": "התקנת LogiBricks Workspace העדכני ביותר",
  "startup.newerDataBody":
    "גרסה חדשה יותר של LogiBricks Workspace שמרה את הנתונים שלך, והגרסה הזו ({version}) אינה יכולה לפתוח אותם. יש להתקין את הגרסה האחרונה כדי לפתוח את הנתונים.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataDownload": "הורדת LogiBricks Workspace",
  "startup.newerDataGuide": "פתיחת המדריך",
  "startup.newerDataQuit": "יציאה",
} as const satisfies PartialTranslation<typeof source>;

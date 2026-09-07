/** Central site configuration. */
export const SITE = {
  name: "TECHVORA ACADEMY",
  tagline: "LEARN • PRACTICE • BUILD • SUCCEED",
  program: "20-HOUR C MASTER CLASSES",
  registrationUrl: "https://forms.gle/hB9ns37UWA9xSU166",
  origin: "https://www.techvoraacademy.in",
  contactEmail: "hello@techvoraacademy.in",
} as const;

export function isSafeExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

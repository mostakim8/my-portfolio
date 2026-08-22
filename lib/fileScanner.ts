// lib/fileScanner.ts

const DANGEROUS_EXTENSIONS = [
  ".exe",
  ".bat",
  ".cmd",
  ".sh",
  ".vbs",
  ".php",
  ".js",
  ".scr",
  ".jar",
  ".zip",
  ".rar",
];
const SUSPICIOUS_KEYWORDS = [
  "hack",
  "crack",
  "cheat",
  "bet",
  "casino",
  "poker",
  "script",
  "exploit",
  "trojan",
  "virus",
  "payload",
  "scam",
  "phishing",
];

export interface ScanResult {
  isSafe: boolean;
  reason?: string;
}

export const inspectFileSafety = (file: File): ScanResult => {
  const fileName = file.name.toLowerCase();

  const nameParts = fileName.split(".");
  if (nameParts.length > 2) {
    const secondLastExt = `.${nameParts[nameParts.length - 2]}`;
    const lastExt = `.${nameParts[nameParts.length - 1]}`;
    if (
      DANGEROUS_EXTENSIONS.includes(lastExt) ||
      DANGEROUS_EXTENSIONS.includes(secondLastExt)
    ) {
      return {
        isSafe: false,
        reason: "Security Threat: Multi-extension wrapper detected.",
      };
    }
  }

  if (DANGEROUS_EXTENSIONS.some((ext) => fileName.endsWith(ext))) {
    return {
      isSafe: false,
      reason: "Blocked File Type: Executable or archive files not allowed.",
    };
  }

  if (SUSPICIOUS_KEYWORDS.some((word) => fileName.includes(word))) {
    return {
      isSafe: false,
      reason: "Security Alert: Name contains suspicious patterns.",
    };
  }

  return { isSafe: true };
};

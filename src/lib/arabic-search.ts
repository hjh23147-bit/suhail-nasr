/**
 * Arabic Text Normalization utility for search and indexing.
 * Does not mutate the original stored display string, only normalizes
 * the search query and the target comparison text in memory.
 */
export function normalizeArabicText(text: string): string {
  if (!text) return "";

  return (
    text
      // 1. Remove Tashkeel / Harakat (Fatha, Damma, Kasra, Sukun, Tanween, Shadda, etc.)
      .replace(/[\u064B-\u065F\u0670]/g, "")
      // 2. Remove Tatweel / Kashida (ـ)
      .replace(/\u0640/g, "")
      // 3. Normalize Alef forms (أ, إ, آ, ٱ -> ا)
      .replace(/[أإآٱ]/g, "ا")
      // 4. Normalize Alef Maqsura (ى -> ي)
      .replace(/ى/g, "ي")
      // 5. Normalize Taa Marbouta (ة -> ه) for flexible fuzzy search
      .replace(/ة/g, "ه")
      // 6. Normalize English/Arabic spaces and lowercasing
      .toLowerCase()
      .trim()
  );
}

/**
 * Checks if candidate text matches the search query using normalized Arabic comparison.
 */
export function matchArabicText(candidate: string, query: string): boolean {
  if (!query.trim()) return true;
  const normalizedCandidate = normalizeArabicText(candidate);
  const normalizedQuery = normalizeArabicText(query);
  return normalizedCandidate.includes(normalizedQuery);
}

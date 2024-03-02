/**
 * Count the number of words in a string.
 */
export function wordCount(text: string): number {
  return text.split(/\s+/).length;
}
// Path: src/utils/truncate.ts

/**
 * Truncates a given name string to a specified maximum length, adding ellipsis if necessary.
 *
 * @param {string} name - The name string to be truncated.
 * @param {number} [maxLength=8] - The maximum allowed length of the truncated string.
 * @returns {string} - The truncated name with ellipsis if it exceeds the maxLength, otherwise the original name.
 *
 * @example
 * truncateName("Jonathan", 5);
 * // Returns: "Jonat..."
 *
 * @example
 * truncateName("Alex");
 * // Returns: "Alex"
 */
export const truncateName = (name: string, maxLength = 8) => {
  if (name.length > maxLength) {
    return `${name.substring(0, maxLength)}...`;
  }
  return name;
};
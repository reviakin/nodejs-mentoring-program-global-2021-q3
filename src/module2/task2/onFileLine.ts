/**
 * Convert columns headers to lower case.
 * @param {String} line content line
 * @param {Number} lineNumber line number
 * @returns {String} line
 */
export function onFileLine(line: string, lineNumber: number): string {
  let output;
  if (lineNumber === 0) {
    output = line.toLowerCase();
  } else {
    output = line;
  }
  return output;
}

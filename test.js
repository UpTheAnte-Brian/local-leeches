function findRepeatingPatterns(arr, digits = 2) {
  
  if (digits < 1 || arr.length < digits) return [];

  // Step 1: Extract all subarrays of the given length
  const patterns = arr
    .map((_, i) => arr.slice(i, i + digits))
    // .filter(sub => sub.length === digits);

  // Step 2: Count the occurrences of each pattern
  const counts = {};
  patterns.forEach(pattern => {
    const key = pattern.join(',');
    counts[key] = (counts[key] || 0) + 1;
  });

  // Step 3: Convert to array format, filter repeating, and sort
  const result = Object.entries(counts)
    .filter(([, count]) => count > 1) // only patterns that repeat
    .map(([key, count]) => ({
      pattern: key.split(',').map(Number),
      count
    }))
    .sort((a, b) => b.count - a.count); // most frequent first

  return result;
}

const arr = [1, 4, 1, 3, 1, 2, 1, 3,1,4,1,2,1,2,1,1,2];
const pattern = findRepeatingPatterns(arr);
console.log(JSON.stringify(pattern)); // Output: [1, 2]

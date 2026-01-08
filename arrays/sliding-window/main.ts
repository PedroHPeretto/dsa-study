class Solution1 {
  public slidingWindow(s: string): number {
    if (s.length === 0) return 0;

    let left: number = 0;
    let right: number = 0;
    let maxLen: number = 0;
    let counter: Record<string, number> = {};

    counter[s[0]] = 1;

    while (right < s.length - 1) {
      right++;

      const charRight = s[right];

      counter[charRight] = (counter[charRight] || 0) + 1;

      while (counter[charRight] === 3) {
        const charLeft = s[left];

        counter[charLeft]--;

        left++;
      }

      maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
  }
}

class Solution2 {
  public slidingWindow(s: string, maxFrequency: number = 2): number {
    if (!s.length) return 0;

    const charFrequencies = new Map<string, number>();

    let left: number = 0;
    let maxwindowSize: number = 0;

    for (let right = 0; right < s.length; right++) {
      const char = s[right];

      const currentCount = (charFrequencies.get(char) || 0) + 1;
      charFrequencies.set(char, currentCount);

      while ((charFrequencies.get(char) || 0) > maxFrequency) {
        const leftChar = s[left];

        charFrequencies.set(leftChar, charFrequencies.get(leftChar)! - 1);

        left++;
      }

      const currentWindowSize = right - left + 1;
      maxwindowSize = Math.max(maxwindowSize, currentWindowSize);
    }

    return maxwindowSize;
  }
}

const string: string = 'ababcbabcbabbc';

const sol1 = new Solution1();
const sol2 = new Solution2();

console.log(sol1.slidingWindow(string));
console.log(sol2.slidingWindow(string));

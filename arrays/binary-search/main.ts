class Solution1 {
  public binarySearch(nums: number[], target: number): number {
    let lp: number = 0;
    let hp: number = nums.length - 1;

    while (lp <= hp) {
      const mid: number = Math.floor(lp + (hp - lp) / 2);

      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] < target) {
        lp = mid + 1;
      } else {
        hp = mid - 1;
      }
    }

    return -1;
  }
}

class Solution2 {
  public binarySearch(sortedNums: number[], target: number): number {
    if (!sortedNums.length) return -1;

    let low: number = 0;
    let high: number = sortedNums.length - 1;

    while (low <= high) {
      const middleIndex: number = Math.floor(low + (high - low) / 2);
      const middleNumber: number = sortedNums[middleIndex];

      if (middleNumber === target) return middleIndex;
      else if (middleNumber < target) low = middleIndex + 1;
      else high = middleIndex - 1;
    }

    return -1;
  }
}

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const sol1 = new Solution1();
const sol2 = new Solution2();

console.log(sol1.binarySearch(a, 6));
console.log(sol2.binarySearch(a, 6));
class Solution1 {
  public exponentialSearch(arr: number[], target: number): number {
    if (arr.length === 0) return -1;
    if (arr[0] === target) return 0;

    let i = 1;
    const n = arr.length;

    while (i < n && arr[i] < target) {
      i *= 2;
    }

    let low = i / 2;
    let high = Math.min(i, n - 1);

    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);

      if (arr[mid] === target) return mid;

      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1;
  }
}

class Solution2 {
  public exponentialSearch(collection: number[], target: number): number {
    if (this.isEmpty(collection)) return -1;
    if (collection[0] === target) return 0;

    const range = this.findSearchRange(collection, target);

    return this.binarySearch(collection, target, range.low, range.high);
  }

  private findSearchRange(collection: number[], target: number): { low: number; high: number } {
    let index = 1;
    const size = collection.length;

    while (collection[index] < target && index < size) {
      index *= 2;
    }

    return {
      low: Math.floor(index / 2),
      high: Math.min(index, size - 1)
    }
  }

  private binarySearch(collection: number[], target: number, low: number, high: number): number {
    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);
      const current = collection[mid];

      if (current === target) return mid;

      if (current < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1;
  }

  private isEmpty(collection: number[]): boolean {
    return collection.length === 0
  }
}

const collection: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const sol1 = new Solution1();
const sol2 = new Solution2();

console.log(sol1.exponentialSearch(collection, 11));
console.log(sol2.exponentialSearch(collection, 11));
class Solution1 {
  public reverseWords(string: string): string {
    let res: string = '';
    let l: number = 0;
    let r: number = 0;

    while (r < string.length) {
      if (string[r] != ' ') {
        r++;
      } else {
        const word = string.slice(l, r);

        res += word.split('').reverse().join('') + ' ';

        r++;
        l = r;
      }
    }

    const lastWord = string.slice(l, r);

    res += lastWord.split('').reverse().join('');

    return res;
  }
}

class Solution2 {
  public reverseWords(string: string): string {
    return string
      .split(' ')
      .map((word) => 
        word
          .split('')
          .reverse()
          .join('')
      ).join(' ');
  }
}

const phrase: string = 'car art';

const sol1 = new Solution1();
const sol2 = new Solution2();

console.log(sol1.reverseWords(phrase));
console.log(sol2.reverseWords(phrase));
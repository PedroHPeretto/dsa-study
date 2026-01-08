/* fake array */let fakeArray: number[] = [];

const array = new ArrayBuffer(8);
console.log(array);

const a8 = new Uint8Array(array);
//console.log(a8)

const a16 = new Uint16Array(array);
//console.log(a16)

const a32 = new Uint32Array(array);
//console.log(a32)

a32[0] = 4294967295;

console.log(a32);
console.log(array);

// complexidade temporal O(1)
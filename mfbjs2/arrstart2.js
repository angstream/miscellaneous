const prt = (s) => console.log(s);

let arr = [1, 4, 5, 8, 0, 3];
let k = 4;
let hash = {};

let count = 0;
for (var i = 0; i < arr.length; i++) {
  for (var y = 1; y < arr.length; y++) {
    if (arr[i] + arr[y] == k) {
      if (!hash[y]) {
        hash[i] = y;
        count++;
      }
    }
  }
}
prt(count);
prt(hash);


let hash2 = {};
for (var i = 0; i < arr.length; i++) {
  hash2[arr[i]] = "";
}
let count2 = 0;
for (var i = 0; i < arr.length; i++) {
  let value = k - arr[i];
  if (value in hash2) count2++;
}
prt(count2 / 2);

let arr = [1, 2, 3, 7, 4, 5, 6, 11, 8];
let arr2 = [1, 11, 4, 8, 6, 3, 7, 2, 5];

const prt = (s) => console.log(s);

function findValue(indx, value) {
  for (var x = indx + 1; x < arr2.length; x++) {
    if (arr2[x] == value) {
      arr2[x] = arr2[indx];
      arr2[indx] = value;
    }
  }
}

for (var i = 0; i < arr.length; i++) {
  if (arr2[i] != arr[i]) {
    findValue(i, arr[i]);
  }
}

prt(arr2);

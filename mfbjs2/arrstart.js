const prt = (s) => console.log(s);

var arr = [3, 4, 1, 6, 2];

function countBack(arr, indx) {
  if (indx == 0) return 0;
  var c = 0;
  var value = arr[indx];
  while (indx > -1) {
    if (arr[indx - 1] < value) c++;
    else break;
    indx--;
  }
  return c;
}

function countForward(arr, indx) {
  if (indx == arr.length - 1) return 0;
  var c = 0;
  var value = arr[indx];
  while (indx < arr.length) {
    if (arr[indx + 1] < value) c++;
    else break;
    indx++;
  }
  return c;
}

function countSubs(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    let x = 1;
    x += countBack(arr, i);
    x += countForward(arr, i);
    arr2.push(x);
  }
  prt(arr2);
}

countSubs(arr);

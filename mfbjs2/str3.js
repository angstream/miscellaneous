var str1 = "dcbefebcef";
var str2 = "fd";

function findSub(s, t) {
  var h1 = {};
  var arr = [...s];
  for (var i = 0; i < s.length; i++) {
    if (!h1[s[i]]) h1[s[i]] = i;
  }
  var arr2 = [];
  //go thru each t character
  for (var i = 0; i < t.length; i++) {
    let value = t[i];
    if (value in h1) {
      var val = h1[value];
      arr2.push(val);
    }
  }
  if (arr2.length > 1) {
    let min = Math.min(...arr2);
    let max = Math.max(...arr2);
    return max - min + 1;
  }
  return -1;
}

let result = findSub(str1, str2);
prt(result);

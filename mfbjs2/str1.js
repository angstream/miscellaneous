const prt = (s) => console.log(s);

function compareStrings(s, t) {
  for (var i = 0; i < t.length; i++) {}
}

function findMatch(s, t) {
  var h1 = {};
  var arr = [...s];
  for (var i = 0; i < s.length; i++) {
    h1[s[i]] = i;
  }

  var flag = true;
  var count = 0;
  for (var i = 0; i < t.length; i++) {
    var value = t[i];
    if (arr[i] == value) count++;
    else if (flag) {
      if (h1[value]) {
        arr[h1[value]] = s[i];
        arr[i] = value;
        count++;
        flag = false;
      }
    }
  }
  if (flag && arr.length > 1) {
    var temp = s[1];
    s[1] = s[0];
    s[0] = temp;
  }
  //prt(arr);
  return count;
}

var str1 = "abcde";
var result = findMatch(str1, "adcbf");
prt(result);

const prt = (s) => console.log(s);

function findMatch(s, t) {
  var h1 = {};
  var h2 = {};
  for (var i = 0; i < s.length; i++) {
    h1[s[i]] = i;
  }
  prt(h1);

  var flag = true;
  var count = 0;
  for (var i = 0; i < t.length; i++) {
    var value = t[i];

    if (s[i] != value) {
      if (!flag) break;
      if (h1[value]) {
        s[h1[value]] = s[i];
        s[i] = value;
        count++;
        flag = false;
      } else break;
    }
    count++;
  }
  prt(s);
  return count;
}

var result = findMatch("abcd", "adcb");
prt(result);

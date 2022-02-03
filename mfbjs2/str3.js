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

function findSubString(s, t) {
  var no_of_chars = 256;
  var len1 = s.length;
  var tlen = t.length;
  var hash_t = Array.from({ length: no_of_chars }, (_, i) => 0);
  var hash_s = Array.from({ length: no_of_chars }, (_, i) => 0);

  // Store occurrence of characters of pattern
  for (var i = 0; i < tlen; i++) hash_t[t.charAt(i).charCodeAt(0)]++;
  var start = 0,
    start_index = -1,
    min_len = Number.MAX_VALUE;

  var count = 0;
  for (var j = 0; j < len1; j++) {
    // Count occurrence of characters
    var code = s.charAt(j).charCodeAt(0);
    hash_s[code]++;
    if (hash_s[code] <= hash_t[code]) count++;
    if (count == tlen) {
      //   //try to minimize window
      while (
        hash_s[s.charAt(start).charCodeAt(0)] >
          hash_t[s.charAt(start).charCodeAt(0)] ||
        hash_t[s.charAt(start).charCodeAt(0)] == 0
      ) {
        let ac = s.charAt(start).charCodeAt(0);
        if (hash_s[ac] > hash_t[ac]) {
          hash_s[ac]--;
        }
        start++;
      }
      //update window size
      var len_win = j - start + 1;
      if (min_len > len_win) {
        min_len = len_win;
        start_index = start;
      }
    }
  }
  return s.substring(start_index, start_index + min_len);
}


let result = findSub(str1, str2);
prt(result);

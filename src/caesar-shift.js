module.exports.caesarShift = function caesarShift(str, amount) {
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  return str.split('').map((c, i) => {
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    return c;
  }).join('');
};

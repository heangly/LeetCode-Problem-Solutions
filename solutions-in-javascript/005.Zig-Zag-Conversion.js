const convert = (s, numRows) => {
  if (numRows < 2) return s;

  let map = {};
  let index = 1;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    if (!map[index]) {
      map[index] = s[i];
    } else {
      map[index] += s[i];
    }

    index += sign;

    if (index >= numRows || index <= 1) {
      sign *= -1;
    }
  }

  return Object.values(map).join('');
};

let s = 'PAYPALISHIRING';
let numRows = 3;

console.log(convert(s, numRows));

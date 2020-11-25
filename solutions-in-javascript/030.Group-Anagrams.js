const groupAnagrams = (strs) => {
  let map = {};

  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    if (sortedStr in map) {
      map[sortedStr].push(str);
    } else {
      map[sortedStr] = [str];
    }
  }

  return Object.value(map);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));

export const cutStrings = (arr = []) => {
  if (arr.length == 0 ) {
    return arr;
  } else {
    function findeShort(word) {
      return word.reduce((a, b) => a.length <= b.length ? a : b);
    }
    const num = findeShort(arr).length;
    
    return newArr = arr.map(item => item = item.substring(0, num));
  }
};

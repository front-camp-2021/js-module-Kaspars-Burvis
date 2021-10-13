export const debounce = (fn, delay = 0) => {
let timeOutId;
return function () {
  const newfn = () => {fn.apply(this, arguments)};
  clearTimeout(timeOutId);
  timeOutId = setTimeout(newfn, delay);
};
}



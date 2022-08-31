export default () => {
  const randomArr = window.crypto
    .getRandomValues(new Int8Array(3))
    .map((el) => {
      return Math.abs(el);
    });
  return randomArr.join('') + '-' + Math.round(Date.now());
};

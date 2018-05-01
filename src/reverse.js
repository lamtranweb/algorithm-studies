// this reverse only iterates n / 2 times
export const reverse = arr => {
  const mid = Math.floor(arr.length / 2);
  // work on a copy
  const copy = [...arr];
  for (let i = 0, j = copy.length - 1; i < mid; i++, j--) {
    // swap
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

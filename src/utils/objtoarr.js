export const objtoarr = obj => {
  const arr = [];
  for (let item in obj) {
    arr.push({
      ...obj[item],
      id: item,
    });
  }
  return arr;
};

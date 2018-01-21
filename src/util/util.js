export const keyGen = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

export const getRandomColor = () => {
  let color = 'red';
  while (color.length < 7) {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return color;
};

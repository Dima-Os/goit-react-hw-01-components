const getRundomColor = () => {
  const getRundomNum = () => parseInt(Math.random() * 255);
  return `rgb(${getRundomNum()},${getRundomNum()},${getRundomNum()})`;
};
export default getRundomColor;

// TODO: There's no way this is accurate or safe to use, replace this
export const hashFormat = (value: number | string, type = 'nhash') => {
  const valueString = `${value}`;
  const exponential = 10000000000;
  const floatAmount = 15;
  const floatedNumber = Number(Number.parseFloat(valueString).toFixed(floatAmount));
  const rawResult = type === 'nhash' ? floatedNumber * exponential : (floatedNumber / exponential);
  return Number(rawResult);
};

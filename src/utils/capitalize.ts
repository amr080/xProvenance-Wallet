// Capitalize and clean the passed in string/word
// Eg: "hello world" => "Hello World"
// Eg: "hEllO" => "Hello"
// Eg: "hELLo_wOrlD" => "Hello World"
export const capitalize = (str = '') => {
  if (!str || typeof str !== 'string') return str;

  return str
    .replaceAll('_', ' ')
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
};

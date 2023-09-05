export default function concatArrays(array1, array2, string) {
  const array = [];

  for (const character of array1) {
    array.push(character);
  }
  for (const character of array2) {
    array.push(character);
  }
  for (const character of string) {
    array.push(character);
  }
  return (array);
}

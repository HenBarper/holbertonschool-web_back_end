export default function appendToEachArrayValue(array, appendString) {
  let counter = 0;
  for (const idx of array) {
    const value = idx;
    array[counter] = appendString + value;
    counter += 1;
  }

  return array;
}

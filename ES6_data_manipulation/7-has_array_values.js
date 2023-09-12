export default function hasValuesFromArray(theSet, theArray) {
  const trueOrFalse = theArray.every((value) => theSet.has(value));
  return trueOrFalse;
}

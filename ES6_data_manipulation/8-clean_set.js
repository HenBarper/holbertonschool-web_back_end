export default function cleanSet(set, startString) {
  if (!startString || startString.length < 1) {
    return '';
  }

  const newStringSet = new Set();

  for (const str of set) {
    if (str) {
      if (str.includes(startString)) {
        newStringSet.add(str.replace(startString, ''));
      }
    }
  }

  const newArraySet = Array.from(newStringSet);
  const finalString = newArraySet.join('-');
  return finalString;
}

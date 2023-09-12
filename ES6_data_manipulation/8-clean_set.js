export default function cleanSet(set, startString) {
  const newStringSet = new Set();

  if (startString !== '') {
    for (const str of set) {
      if (str.includes(startString)) {
        newStringSet.add(str.replace(startString, ''));
      }
    }
  }

  const newArraySet = Array.from(newStringSet);
  const finalString = newArraySet.join('-');
  return finalString;
}

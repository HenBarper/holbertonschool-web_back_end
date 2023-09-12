export default function updateUniqueItems(groceryList) {
  if (!(groceryList instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [key, value] of groceryList.entries()) {
    if (value === 1) groceryList.set(key, 100);
  }
  return groceryList;
}

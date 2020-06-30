// a little function to help us with reordering the result
export const reorder = (
  list,
  startIndex,
  endIndex
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex.index, 1);
  result.splice(endIndex.index, 0, removed);

  return result;
};
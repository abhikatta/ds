export const SelectionSort = (arr: number[]) => {
  const arrLen = arr.length;
  for (let i = 0; i < arrLen - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
};

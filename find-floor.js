function findFloor(arr, num) {
  let leftIdx = 0,
    rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    // If midIdx is less than or equal to num
    if (arr[midIdx] <= num) {
      // Is midIdx the largest num in range?
      if (arr[midIdx] <= arr[rightIdx]) {
        // Binary search the subarray
        subArr = arr.slice(midIdx);
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
          let mid = Math.floor((left + right) / 2);

          if (arr[mid] <= num) {
            result = arr[mid];
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return result;
      }
    }
    // Is midIdx too high?
    else if (arr[midIdx] > num) {
      // Go left
      rightIdx = midIdx - 1;
    }
  }
  return -1;
}

module.exports = findFloor;

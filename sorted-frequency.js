function sortedFrequency(arr, num) {
    let firstIndex = findFirstIndex(arr, num);
  
    // If num not found
    if (firstIndex === -1) {
      return -1;
    }
  
    let lastIndex = findLastIndex(arr, num);
  
    // Add one to match length
    return lastIndex - firstIndex + 1;
  }
  
  function findFirstIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        end = mid - 1;
      } else if (arr[mid] < num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return result;
  }
  
  function findLastIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        start = mid + 1;
      } else if (arr[mid] < num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return result;
  }
module.exports = sortedFrequency
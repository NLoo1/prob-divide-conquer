function countZeroes(arr) {
  let leftIdx = 0, 
    rightIdx = arr.length -1

    if(arr[leftIdx] == 0) return arr.length

  while(leftIdx <= rightIdx){
    midIdx = Math.floor((leftIdx +rightIdx)/2)

    // If midIdx is 1, move right
    if(arr[midIdx] == 1){
      leftIdx = midIdx+1
    }

    // If mididx is 0
    else if(arr[midIdx] == 0){
      // Check if there are prior 0s
      if (midIdx == 0 || arr[midIdx - 1] == 1) {
        // If not, return length of right side
        return arr.slice(midIdx).length;
      } else {
        // If there are prior 0s, move leftIdx back
        leftIdx = midIdx - 1;
      }
    }
    if (leftIdx > rightIdx) {
      break;
    }
  }
    return 0  
}

module.exports = countZeroes
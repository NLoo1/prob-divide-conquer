function countZeroes(arr) {
  let leftIdx = 0, 
    rightIdx = arr.length -1

  while(leftIdx <= rightIdx){
    let midIdx = Math.floor((leftIdx +rightIdx)/2)

    // If midIdx is 1, move right
    if(arr[midIdx] == 1){
      leftIdx = midIdx+1
    }

    // If mididx is 0, move left
    else{
      rightIdx = midIdx-1
    }
    
  }
    return arr.length - leftIdx
}



module.exports = countZeroes
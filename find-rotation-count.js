function findRotationCount(arr) {
    let leftIdx = 0, rightIdx = arr.length -1

    while (leftIdx<= rightIdx){
        midIdx = Math.floor((leftIdx+rightIdx)/2)

        if(arr[leftIdx] >= arr[midIdx]){
            if(arr[rightIdx] <= arr[midIdx]) return arr.slice(0,midIdx).length
            else if(arr[rightIdx] > arr[midIdx]){
                return midIdx
            }
        }
        else if(arr[leftIdx] < arr[midIdx]){
            if(arr[rightIdx] >= arr[midIdx]){
                return 0
            }
            else if(arr[rightIdx] <= arr[midIdx]){
                return rightIdx
            }
        }
    }
    return 0
}

module.exports = findRotationCount
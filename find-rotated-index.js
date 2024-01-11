function findRotatedIndex(arr, num) {
    let firstIdx = 0, lastIdx = arr.length-1

    while (firstIdx <= lastIdx){
        let midIdx = Math.floor((firstIdx+lastIdx)/2), midVal = arr[midIdx]

        if(midVal == num) return midIdx
        else if(midVal => num){ 
            if(arr[firstIdx] <= num && num < midVal) lastIdx = midIdx-1
            else firstIdx = midIdx + 1
        }
        else{
            if(midVal < num && num <= arr[lastIdx]) firstIdx = midIdx+1
            else lastIdx = midIdx-1
        }
    }
    return -1
}


module.exports = findRotatedIndex
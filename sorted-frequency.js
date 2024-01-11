function sortedFrequency(arr, num) {
    let leftIdx = 0, rightIdx = arr.length -1

    while(leftIdx < rightIdx){
        midIdx = Math.floor((leftIdx+rightIdx)/2)
        midVal = arr[midIdx]
        if(midVal == num){
            
        }
        else if (midVal > num){
            rightIdx = midIdx-1
        }
        else if (midVal < num){
            leftIdx = midIdx +1
        }

        if(leftIdx > rightIdx) break;
    }
    return -1
}

module.exports = sortedFrequency
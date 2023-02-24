// on input of n elements
// if (n < 2) {
//  return
// } else { 
//  sort left half of elements
//  sort right half of elements
//  merge sorted halves
// }

let array = [1,2,3,4,5,6,7,8,9]
let low = 0
let high = array.length

function mergeSort(array, low, high) {
    if (0 == (high - 1)) {
        return
    } else {
        let middle = parseInt(low + high / 2)
        let leftArray = array.slice(0, middle);
        let rightArray = array.slice(middle, high);
        console.log(leftArray + " is leftArray")
        console.log(rightArray + " is rightArray")
        mergeSort(leftArray, low, leftArray.length)
        mergeSort(rightArray, low, rightArray.length)       
        console.log((low) + " " + (middle) + " " + (high) + " is lowmidhigh")
    }
}

console.log(mergeSort(array, low,high))

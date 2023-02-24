// on input of n elements
// if (n < 2) {
//  return
// } else { 
//  sort left half of elements
//  sort right half of elements
//  merge sorted halves
// }

let array = [5,2,1,3,6,4]
let low = 0
let high = array.length
let newArray = []

function mergeSort(array, low, high) {
    if (0 == (high - 1)) {
        console.log(array[0] + " is ready for merge")
        newArray.push(array[0])
    } else {
        let middle = parseInt(low + high / 2)
        let leftArray = array.slice(0, middle);
        let rightArray = array.slice(middle, high);
        mergeSort(leftArray, low, leftArray.length)
        mergeSort(rightArray, low, rightArray.length)       
    }
}

console.log(mergeSort(array, low, high))
console.log(newArray)

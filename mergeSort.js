let array = [5,2,1,7,6,4,3]
let low = 0
let high = array.length

function mergeSort(a, low, high) {
    if (high == 1) {
        return array
    }

    let middle = parseInt(low + high / 2)
    let leftArray = a.slice(0, middle);
    let rightArray = a.slice(middle, high);
    mergeSort(leftArray, low, leftArray.length)
    mergeSort(rightArray, low, rightArray.length)       
    return merge(leftArray, rightArray)
}

console.log(array)
console.log(mergeSort(array, low, high))

function merge(a, b) {
    let c = []

    if (a.length & b.length > 0) {
        if (a[0] > b[0]) {
            console.log(a[0] + " > " + b[0])
            c.push(b[0])
            b.shift();
        } else {
            console.log(a[0] + " < " + b[0])
            c.push(a[0])
            a.shift();
        }
    }

    if (a.length > 0) {
        console.log("a has elements so push to end of c") 
        c.push(a[0])
        a.shift();
    }

    if (b.length > 0) {
        console.log("b has elements so push to end of c") 
        c.push(b[0])
        b.shift();
    }

    console.log(c + " is c")
    return c
    //at this point, a and b should be empty
}
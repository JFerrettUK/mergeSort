let array = [5,2,1,6,4,3,7]

function mergeSort(a) {
    if (a.length == 1) {
        return a
    }

    const half = a.length / 2
    let leftArray = a.slice(0, half);
    let rightArray = a.slice(half,  array.length);

    // console.log(leftArray + " is left, " + half + " is middle, " + rightArray + " is right")

    console.log(leftArray)
    console.log(rightArray)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(a, b) {
    let c = []

    while (a.length && b.length) {
        if (a[0] > b[0]) {
            b + " is pushed"
            c.push(b[0])
            b.shift();
        } else {
            a + " is pushed"
            c.push(a[0])
            a.shift();
        }
    }


    while (a.length > 0) {
        c.push(a[0])
        a.shift();
    }

    while (b.length > 0) {
        c.push(b[0])
        b.shift();
    }

    return c
}

console.log(array)
console.log(mergeSort(array))



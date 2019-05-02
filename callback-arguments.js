// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    arr.forEach((element, index) => {
        if (element === "Waldo") {
            found(element, index)
        }
    })
}

var actionWhenFound = (name, index) => console.log(`Found ${name} at index ${index}!`)

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
function myEach(input, fn) {
    if (input instanceof Array) {
        for (let item of input) {
            fn(item)
        }
    } else {
        let newArray = [];
        for (let item of Object.values(input)) {
            newArray.push(item)
        };
        for (let item of newArray) {
            fn(item)
        }
    }
    return input
}

function myMap(input, helperFunc) {
    let newArray = []
    if (input instanceof Array) {
        for (let item of input) {
            newArray.push(helperFunc(item))
        }
    } else {
        for (let item of Object.values(input)) {
            newArray.push(helperFunc(item))
        };
    }
    return newArray;
}

function myFind(input, fn) {
    if (input instanceof Array) {
        for (let index = 0; index < input.length; index++) {
            const element = array[index];
            if (fn(element)){
                return element
            }
            
        }
    } else {
        let newArray = Object.values(input)
        for (let index = 0; index < newArray.length; index++) {
            const element = newArray[index];
            if (fn(element)){
                return element
            }
        }
    }
}

function myFilter(collection,predicate){
    let newArray = []
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        if (predicate(element)){
            newArray.push(element)
        }
    }
    return newArray;
}

function myReduce(collection, callback, init) {
    if (collection instanceof Array){
    if (!init) {
        init = collection[0]
        collection = collection.slice(1)
        let acc = init
        for (const element of collection) {
            acc = callback(acc, element,collection)
        }
        return acc
    } else {
        let acc = init
        for (const element of collection) {
            acc = callback(acc, element)
        }
        return acc
    }
} else{

    if (init === undefined) {
        collection = Object.values(collection)
        init = collection[0]
        collection = collection.slice(1)
        let acc = init
        for (const element of collection) {
            acc = callback(acc, element,collection)
        }
        return acc
    } else {
        let acc = init
        for (const element of collection) {
            acc = callback(acc, element,collection)
        }
        return acc
    }

}
}

function mySize(collection) {
    let itemCount = 0;
    for (let item in collection) {
        itemCount++
    }
    return itemCount
}

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0]
    } else {
        let newArray = []
        for (let item of array) {
            newArray.push(item)
            n--
            if (n === 0) {
                return newArray
            }
        }
    }
}

function myLast(array,n=1){
    if (n===1){
        return array[array.length-1]
    } else{
        let newArray = []
        for (let index = array.length-1; index > 0; index--) {
            debugger
            newArray.unshift(array[index])
            n--
            if (n===0){
                return newArray
            }
        }
    }
}



function myKeys(object) {
    let newObject = Object.keys(object)
    return newObject
}

function myValues(object) {
    let newObject = Object.values(object)
    return newObject
}

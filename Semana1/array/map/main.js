const numbers = [1, 2, 3, 4, 5];

// forma estructurada

function sumNumber(collection, num) {
    const newColletion = [];

    for (let item of collection) {
        newColletion.push(item + num);
    }

    return newColletion;
}

// usando funciones existentes

function sumNumber2(collection, num) {
    return collection.map(item => item + num);
}

console.log(sumNumber(numbers, 10));
console.log(sumNumber2(numbers, 10));
console.log(numbers);
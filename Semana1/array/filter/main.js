const names = ["Ana", "Alejandro", "Francisco", "Héctor",
    "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

// modo estructurado

function searchFirstLetter(collection, letter) {
    const newCollection = [];

    for (const word of collection) {
        if (word[0].toUpperCase() === letter.toUpperCase())
            newCollection.push(word);
    }

    return newCollection;
}

function searchFirstLetter2(collection, letter) {
    const char = letter.toUpperCase();
    return collection.filter((word) => word[0].toUpperCase() === char);
}

console.log(searchFirstLetter2(names, "a"))
console.log(searchFirstLetter(names, "A"));


const names = ["Ana", "Alejandro", "Francisco", "Héctor",
    "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

// modo estructurado

function remuveName(collection, name) {
    const newCollection = [];

    for (const word of collection) {
        if (word !== name) {
            newCollection.push(word);
        }
    }

    return newCollection;
}

// Usando funciones existentes

function remuveName2(collection, name) {
    return collection.filter((item) => item !== name);
}

console.log(remuveName(names, "Alejandro"));
console.log(remuveName2(names, "Alejandro"));
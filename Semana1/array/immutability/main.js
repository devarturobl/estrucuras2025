const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5];

function mulMutable(collection, num) {
    for (let i = 0; i < collection.length; i++) {
        collection[i] *= num;
    }
    return collection;
}

// no modifica el array original
function mulImmutable(collection, num) {
    const nerNubers = [];
    for (let item of collection) {
        nerNubers.push(item * num);
    }

    return nerNubers;
}


const newArray = mulMutable(numbers, 2);

console.log(newArray);
console.log(numbers);

const newArray2 = mulImmutable(numbers2, 2);

console.log(newArray2);
console.log(numbers2);

// Immutabilidad en objetos

class Beer {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// modifica el objeto original
function toUpperMutable(beer) {
    beer.name = beer.name.toUpperCase();
    return beer;
}

// no modifica el objeto original
function toUpperImmutable(beer) {
    // const newBeer = {...beer};
    const newBeer = structuredClone(beer);

    newBeer.name = newBeer.name.toUpperCase();
    return newBeer;
}


const beer = new Beer('delirium', 6);

const newBeer2 = toUpperImmutable(beer);
console.log(newBeer2);
console.log(beer);

const newBeer = toUpperMutable(beer);
console.log(newBeer);
console.log(beer);


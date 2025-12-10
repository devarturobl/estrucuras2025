// setTimeout(()=>console.log("Hola un segundo después"), 1000)

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("se ejecuta la promesa");
//         reject("Algo paso, error");
//         // resolve("pato");
//     }, 1000);
// });

// myPromise
//     .then(data => console.log("El dato retornado por la promesa es: " + data))
//     // .catch(error => console.error(error));


// // Api fetch

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data => data.json())
//     // .then(json => console.log(json));

// async y await

(function () {
    // console.log("Soy una IIFE: Expresión de función ejecutada inmediatamente");
})();

(async function () {
    const dataResult = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonResult = await dataResult.json();
    // console.log(jsonResult);
})();


// Leyendo nuestro json con el api fetch
// fetch("people.json")
//     .then(data => data.json())
//     .then(json => {
//         const people = json;
//         console.log(people.name);

//         for (const skill of people.skills) {
//             console.log("habilidad: " + skill);
//         }
//     });


const p = {
    "name": "Héctor de León",
    "email": "unmail@mail.com",
    "site": "http://www.hdeleon.net",
    "twitter": "http://twiter.com/powerhdeleon",
    "skills": [
        "backend", "frontend", "Iot"
    ],
    "address": {
        "city": "Guadalajara",
        "region": "Jalisco",
        "country": "México"
    }
};

console.log(p.address);

// objetos literals, objetos literales


const sale = {
    customer: "Héctor de León",
    total: 11000,
    items: [{
        name: "Monitor 20 pulgadas",
        brand: "LG",
    },
    {
        name: "Teclado",
        brand: "Logitech",
    },
    {
        name: "Mouse",

        brand: "Logitech",
    }
    ],

    showItems() {
        this.items.forEach(item => console.log(item.name));
    },
    showInfo() {
        console.log("La información de la venta es: ");
        console.log(`Cliente: ${this.customer}, Total: ${this.total}`);
        this.showInfo();
    }
}

sale.showInfo();
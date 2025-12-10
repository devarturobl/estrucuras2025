
const PI = 3.141592653589793;
const d1 = 10;

let result = PI * d1;

console.log(result);

let d2 = 8;
result = PI * d2;

console.log(result);

function circlePerimeter (PI, diameter) {
    return PI * diameter;
}

result = circlePerimeter(PI, d1);
console.log(result)

function show(name = "Sin nombre") {
    console.log("Hola " + name)
}

show("Héctor");
show();
/*
Este es el primer programa en JS
Toma nota de las partes y sintaxis de JS para hacer una funcion
en mi caso se llamara saludar
*/

function saludar(){
    alert("Hola, Bienvenidos, este ejemplo muestra como incorporar JS en HTML");
}

function teSaludo(nombre){
    alert("Hola " + nombre + ", Bienvenidos, este ejemplo muestra como incorporar JS en HTML");
}

function fizzBuzz(){
    for(let num=1; num<=100; num*=4){
        if(num % 3 === 0 && num % 5 === 0){
            console.log("FizzBuzz");
        } else if(num % 3 === 0){
            console.log("Fizz");
        } else if(num % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}
const number = 80;
const decimal = 15.8;
const legibleNumber = 5_000_000;

function saldarNumber(){
    for(x=1000000; x<=legibleNumber; x+=1000000){
        console.log("Saludo número:", x, "\n");
    }
}

function entornoSuma(num) {
    num = num + number
    return console.log(num)
}

function tablaMultiplicar(num){
    for(i=1; i<=10; i++){
        console.log(num + " x " + i + " = " + (num*i));
    }
}

function tablaMultiplicarM(num){
    for(i=10; i>=1; i--){
       console.log(num + " x " + i + " = " + (num*i)); 
    }
}
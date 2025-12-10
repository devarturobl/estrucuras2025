/**Contrucción de Array con Clases */
// Uso tradicional en Js de Array
const array = ["Jorge", "Diego", "Pedro"];

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {

        }
    }

    get(index){ 
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length += 1;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length - 1]; //Obtener el ultimo elemento
        delete this.data[this.length - 1]; //Elimina el elemento mediante palabra reservada delete
        this.length -= 1;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(let i = index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    unshift(item){
        if(item){
            this.length++;
            
            for(let i = this.length - 1; i > 0; i--){
                this.data[i] = this.data[i-1];

            }

            this.data[0] = item;

        }
        
        return this.length;
    }

    shift(){
        if(this.length === 0){
            return undefined;
        }

        let eliminado  = this.data[0];

        this.shiftIndex(0);

        return eliminado;
    }
}

const arrayNew = new MyArray();
console.log(arrayNew);
//Agregar nuevo elemento
// console.log("====================");
// console.log(arrayNew.push("Jorge"));
// console.log(arrayNew.push("Juan"));
// console.log(arrayNew.push("Pedro"));

//Consultar un elemento especifico
// console.log("====================");
// console.log(arrayNew.get(1));

//Eliminar elemento
// console.log("====================");
// console.log(arrayNew); 
// console.log(arrayNew.pop())
// console.log(arrayNew); 

//Eliminar iten en N posicion
// console.log("====================");
// console.log(arrayNew); 
// console.log(arrayNew.delete(0))
// console.log(arrayNew); 

//Agregar elemento al inicio
console.log("====================");
console.log(arrayNew); 
console.log(arrayNew.unshift(10));
console.log(arrayNew.unshift('YAELO'));
console.log(arrayNew.unshift());
console.log(arrayNew);






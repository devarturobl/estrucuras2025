class HashTable{
    constructor(size){
        this.data =  new Array(size);
    }

    hashMethod(key){
        let hash = 0;
        for(let i = 0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }

        return hash;
    }

    set(key,value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }

        this.data[address].push([key,value]);
    }

    get (key){
        const address = this.hashMethod(key);

        const currentBucket = this.data[address];

        if(currentBucket){
            for(let i= 0; i< currentBucket.length; i++){
                if(currentBucket[i][0] == key){
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;

    }

    /**Eliminar un elemento con key especifica */
    delete (key){
        const address = this.hashMethod(key);

        const currentBucket = this.data[address];

        if(currentBucket){
            for(let i= 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    let itemDelete = currentBucket[i];

                    delete currentBucket[i];

                    //* elimino el espacio vacio para que los demas espacios recorran
                    //Ejemplo 
                    // Array (1,2,3,4,5) Aplicamos splice(3,1);
                    //Resultado Array (1,2,4,5);
                    currentBucket.splice(i, 1)

                    return itemDelete;
                }
            }

        }

        return undefined;
    }

    /*Obtener todas las keys */
    getAllKey(){
        let keys = [];

        for(let i = 0; i < this.data.length; i++){
            let currentBucket = this.data[i]
            if(currentBucket){
                for(let j= 0; j < currentBucket.length; j++){
                    if(currentBucket[j][0]){
                        keys.push(currentBucket[j][0]);
                    }
                }
            }
        }

        return key;
    }
}

const myHashTable = new HashTable(50);

console.log("======Agregar nuevos datos=============");
myHashTable.set("Diego",1999);
console.log(myHashTable.data);
myHashTable.set("Mariana",1998);
console.log(myHashTable.data);
myHashTable.set("Adriana",2000);
console.log(myHashTable.data);

console.log("======Obtener value mediante un key===========");
console.log(myHashTable.get("Diego"));
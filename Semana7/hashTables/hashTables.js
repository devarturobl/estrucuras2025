class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //metodo para agregar
  set(key, value) {
    const address = this.hashMethod(key);
    // si no existe el array, entonces creelo
    if (!this.data[address]) {
      this.data[address] = [];
    }
    //Si existe, guarde otras [key, value]
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    /*saber en que dirección está (nos devuelve un hash pasandole
          un key)*/
    const address = this.hashMethod(key);
    // Es el address donde se encuentra la info
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        /* [[1],[2],[3],[4]]
                         Va ir buscando de acuerdo a la llave,
                        que valor le corresponde
                        Si el bocket 1 tiene de key "Miguel", devuelva
                        su value
                        */
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
        }
      }
    }
    // si el key no existe
    return undefined;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          return deletedValue;
        }
      }
    }
  }
  showKeys() {
    const currentBucket = this.data;
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i]) {
          console.log(currentBucket[i][0][0]);
        }
      }
    }
  }
}

const myHashTable = new hashTable(50);
myHashTable.set("Miguel", 18);
myHashTable.set("Juan", 18);
myHashTable.set("Jimena", 17);
myHashTable.showKeys();

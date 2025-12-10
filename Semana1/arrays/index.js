class array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    // 0 = item
    this.data[this.length] = item;
    // 0 = item 1
    //1 = item 2
    this.length++;

    return this.data;
  }
  pop() {
    // guardamos data[4-1] = data[3]
    const restItems = this.data[this.length - 1];
    // borra el ultimo elemento
    delete this.data[this.length - 1];
    // para que si estaba en 4 pase a 3
    this.length--;
    // retorna el resto de elementos
    return restItems;
  }
  methodDelete(index) {
    debugger;
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    debugger;
    for (let i = index; i < this.length - 1; i++) {
      /*
                        Si tenemos 
                        0 : "Miguel",
                        1 : "Juan",
                        2 : "Oscar",
                    */
      this.data[i] = this.data[i + 1];
      /*
                        Con el bucle tenemos  
                        0 : "Miguel",
                        1 : "Oscar",
                        2 : "Oscar",
                    */
    }
    /* Y aquí borramos el ultimo para 
                y quedar con 
                    0: "Miguel",
                    1: "Oscar"
                */
    delete this.data[this.length - 1];
    this.length--;
  }
  shiftIndexAdd(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    /*
                    Con el bucle quedamos con el primero
                    repetido así: 

                    0: "Miguel",
                    1: "Miguel",
                    2: "Juan",
                    3: "Oscar"
                */
    this.data[0] = item;
    /* Y le damos la ubicación del primero
                y así todo parezca normal */
    this.length++;
  }
  remoteFirts() {
    return this.methodDelete(0);
  }
}

const novo = new array();
novo.push("Numero pi");
novo.push("Numero de euler");
novo.push("Miguel");
console.log(novo);
novo.methodDelete(1);
console.log(novo);

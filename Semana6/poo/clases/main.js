const juan = new Object();

juan.name = 'Juan';
juan.age = 21;
console.log(juan);

// clase 

class People {

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    hi() {
        return "Hola, soy " + this.name + " " + this.lastName;
    }

    fullName() {
        return this.name + " " + this.lastName;
    }
}

// Herecia

class Student extends People {
    constructor(name, lastName, career) {
        super(name, lastName);
        this.career = career;
    }

    hi() {
        return super.hi() + " soy estudiante " + this.career;
    }

    careerDetail() {
        return "Estudia " + this.career;
    }
}


const hector = new People("Héctor", "de León");
console.log(hector)
console.log(hector.hi());
console.log(hector.fullName())

const pedro = new People("Pedro", "Pérez");
console.log(pedro.hi());
console.log(pedro.fullName());

// objeto hijo
const maria = new Student("Maria", "Guevara", "Ingenieria");
console.log(maria.hi());
console.log(maria.fullName());
console.log(maria.careerDetail());

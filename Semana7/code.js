function mostrarVariables(){
    let nombre = "Juan Pérez"; // String
    let edad = 30; // Number
    let esEstudiante = true; // Boolean
    let estatura = 1.70; // Double
    
    document.getElementById("resultado").innerHTML =
        `<p>Nombre: ${nombre} (Tipo: ${typeof nombre})</p>
         <p>Edad: ${edad} (Tipo: ${typeof edad})</p>
         <p>Es Estudiante: ${esEstudiante} (Tipo: ${typeof esEstudiante})</p>
         <p>Estatura: ${estatura} (Tipo: ${typeof estatura})</p>`;
}

let datos = [];

function datosarreglo(){
    nombre = document.getElementById("nombre").value;
    document.getElementById("nombre").value = "";
    
    datos.push(nombre);

    document.getElementById("elementos").innerHTML = "";

    datos.forEach(function(item, index){
        document.getElementById("elementos").innerHTML += `<p>Elemento ${index + 1}: ${item} <button onclick="eliminarElemento(${index})">Eliminar</button> <button onclick="editarElemento(${index})">Editar</button> </p>`;
    });
}


let miEstructura = {
    nombre: "",
    edad: 0,
    telefono: "",
    soltero: false,
    estatura: 0.1
};

// Start with an empty array; elements will be added via addStructA
let miEstructuraArreglo = [];

function datoStruct(){
    miEstructura.nombre = document.getElementById("nombre1").value;
    miEstructura.edad = parseInt(document.getElementById("edad").value);
    miEstructura.telefono = document.getElementById("telefono").value;
    miEstructura.estatura = parseFloat(document.getElementById("es").value);
    miEstructura.soltero = document.getElementById("solteroStruct").value;
}

function datoStructA(){
    let nombre = document.getElementById("nombre2").value;
    let edad = parseInt(document.getElementById("edad2").value);
    let telefono = document.getElementById("telefono2").value;
    let estatura = parseFloat(document.getElementById("es2").value);
    let soltero = document.getElementById("genero2").value;

    addStructA(nombre, edad, telefono, estatura, soltero);
}

function addStructA(nombre, edad, telefono, estatura, soltero){
    miEstructuraArreglo.push({
        nombre: nombre,
        edad: edad,
        telefono: telefono,
        estatura: estatura,
        soltero: soltero
    });
    return console.log(miEstructuraArreglo);
}

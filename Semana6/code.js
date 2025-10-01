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

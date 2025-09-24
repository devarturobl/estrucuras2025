function llenarLista() {
    document.getElementById("idea1").innerHTML = "Entender el problema jhg u gyug yu yu uyg uy h";
    document.getElementById("idea2").innerHTML = "Dividir el problema en partes más pequeñas";
    document.getElementById("idea3").innerHTML = "Resolver cada parte por separado";
    document.getElementById("idea4").innerHTML = "Combinar las soluciones para resolver el problema completo";
    document.getElementById("idea5").innerHTML = "Probar y ajustar la solución según sea necesario";
    document.getElementById("idea6").innerHTML = "aaaaaaa!";
}

function saludar() {
   let nombre = document.getElementById("nombre").value;
   document.getElementById("miSaludo").innerHTML = "Hola " + nombre + ", bienvenido a la clayb98by9yy9by9yb98bye de programación!";
   alumnos.push(nombre);

   document.title = "Clase de " + nombre;
}

var alumnos = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];


function mostrarParrafos() {
    let parrafos = document.getElementsByTagName("li");
    let contenedor = document.getElementById("contenedor");
    
    for (let i = 0; i < parrafos.length; i++) {
        let nuevoP = document.createElement("h4");     // crea un <p>
        nuevoP.textContent = parrafos[i].textContent; // le copia el texto
        contenedor.appendChild(nuevoP); 
    }
}

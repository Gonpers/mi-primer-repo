console.log("Hola mundo");

function suma(){
    return "hola soy una funcion"
}
 

let auto = {
    modelo:"neon",
    color: "gris",
    
}

let listaAutos =[
{modelo:"mazda",
color:"negro"
},
{modelo:"malibu",
color:"blanco"
}

]

/*let userList = [
{
    nombre: "jenith",
    telefono: "262226226",
    edad: 55   
},
{
    nombre: "enmanuel",
    telefono: "64344545425",
    edad: 28   
}

] */

//console.log(userList);
//console.log(listaAutos);

console.log(auto);

let realName;

//let userName = 'Rigbebito';

//var userName2 = 'digrat';

const pi = 3.14159265359 ;

//console.log(userName)

//realName = prompt("Quien sos vos??");
//formularios
//username
//password
//fecha de nacimiento

//y enviar los datos por consola

function showAlert (){

    alert(`Felicidades ${realName}, ahora eres un ${userName} wooooooo.`);
}

function showAlert2 (){

    alert (`Oh no ${realName}, te transformaste en un ${userName2} gg no team`);
}

let sumaFuncion = 0;
console.log(sumaFuncion);
function addNumber(num) {
    
    return num;
}

sumaFuncion = addNumber("jjjjj")
console.log("Despues de la funcion : "+sumaFuncion);
var colored = "red";

var colored2 = "blueviolet";

function backgcc(){

    var div = document.getElementById("miDivCambiante");
    
    if (div.style.backgroundColor != "red" ) {

        div.style.backgroundColor = "red";
        
    } else {

        div.style.backgroundColor = "blueviolet";
    }
}

function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;

// Validaciones de los valores ingresados
 if (!username || !password || !birthdate) {
    alert("Por favor completa todos los campos.");
    return;
  }

// Crear un objeto de usuario con los valores ingresados
   const user = {
    username: username,
    password: password,
    birthdate: birthdate
  };

// Agregar el objeto de usuario a una lista de usuarios registrados
const userList = JSON.parse(localStorage.getItem("users")) || [];
userList.push(user);
localStorage.setItem("users", JSON.stringify(userList));

// Mostrar un mensaje de éxito al usuario
alert("Registro exitoso!");
console.log (user);
}


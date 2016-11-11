
function init (){
document.getElementById("enviar").onclick = function (){
validar();
limpiarCampos ();
}

}//init

function validar(){
	
	nombre = document.getElementById("nombre").value;
	pais = document.getElementById("pais").value;
	correo = document.getElementById("correo").value;
	//validacion para el campo nombre
		if(!(validar_letrasyespacios(nombre)) || (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre))){
			
		error1 = "Campo nombre es obligatorio y no permite numeros";
		var contenido4 =document.createTextNode(error1);
		var err1 = document.createElement("div");
		err1.setAttribute("class","error");
		err1.appendChild(contenido4);
		document.getElementById("error1").appendChild(err1);
	
		return false;
		}else if ((validar_letrasyespacios(nombre)) || (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre))){
			
		error1 = "Campo correcto";
		var contenido4 =document.createTextNode(error1);
		var err1 = document.createElement("div");
		err1.setAttribute("class","error");
		err1.appendChild(contenido4);
		document.getElementById("error1").style.display = 'none';
		}
		//validacion para el campo pais
		 if(!(validar_letrasyespacios(pais)) || (pais == null || pais.length == 0 || /^\s+$/.test(pais))){
			error2= "El campo pais no permite numeros";
			var contenido5 = document.createTextNode(error2);
			var err2 = document.createElement("div");
			err2.setAttribute("class","error");
			err2.appendChild(contenido5);
			document.getElementById("error2").appendChild(err2);
			return false;
			
			}else if ((validar_letrasyespacios(pais)) || (pais == null || pais.length == 0 || /^\s+$/.test(pais))){
			error2= "campo correcto";
			var contenido5 = document.createTextNode(error2);
			var err2 = document.createElement("div");
			err2.setAttribute("class","error");
			err2.appendChild(contenido5);
			document.getElementById("error2").style.display = 'none';
			
		}
		//validacion para el campo correo
		 if(!(validar_email(correo))){
			error3 = "Ingrese su email correctamente \n debe llevar un @ y un punto";
			var contenido6 = document.createTextNode(error3);
			var err3 = document.createElement("div");
			err3.setAttribute("class","error");
			err3.appendChild(contenido6);
			document.getElementById("error3").appendChild(err3);
			return false;
			
		}else if ((validar_email(correo))){
		error3 = "campo correcto";
			var contenido6 = document.createTextNode(error3);
			var err3 = document.createElement("div");
			err3.setAttribute("class","error");
			err3.appendChild(contenido6);
			document.getElementById("error3").style.display = 'none';
		}
		//elementos HTML
var caja = document.getElementById("caja1");
var erro=document.getElementById("error1");
var erro =document.getElementById("error2");
var errro=document.getElementById("error3")

//guardamos el contenido en una variable
var texto = document.getElementById("mensaje").value;
var nom = document.getElementById("nombre").value;
var day= new Date ();
var fecha = day.getDate () + "/" +(day.getMonth()+1) + "/" + day.getFullYear ();
texto.toString();
nom.toString();

//creamos un objeto con el contenido guardado

//objeto comentarioo
var contenido = document.createTextNode(texto);
//objeto nombre
var contenido2= document.createTextNode(nom);

var contenido3 =document.createTextNode(fecha);

//creamos un nuevo div
var caja2 = document.createElement("div");
caja2.setAttribute("class","comentario");

//parrafo para el nombre
var espacio=document.createElement("p");
espacio.setAttribute("class","comentario2");

//parrafo para el comentario
var espacio2=document.createElement("p");
espacio2.setAttribute("class","comentario3");

//parrafo para la fecha
var espacio3 = document.createElement("p");
espacio3.setAttribute("class","comentario4");

//elementos guardados en los parrafos
espacio.appendChild(contenido2);
espacio2.appendChild(contenido);
espacio3.appendChild(contenido3);



//parrafos guardados en div negro
caja2.appendChild(espacio);
caja2.appendChild(espacio2);
caja2.appendChild(espacio3);


document.getElementById("caja1").appendChild(caja2);
return true;


}

function validar_letrasyespacios(campo){
	var expresion = new RegExp("^[a-zA-ZÑñ ]*$", "g");
	return expresion.test(campo);
}

function limpiarCampos (){
document.getElementById("nombre").value = "";
document.getElementById("pais").value = "";
document.getElementById("correo").value = "";
document.getElementById("mensaje").value = "";
}

function validar_email(campo){
	var expresion = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
	return expresion.test(campo);
}

window.onload = init; 
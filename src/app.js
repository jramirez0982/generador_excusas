import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ['El perro', 'Mi abuela', 'El mensajero', 'Mi pajaro'];
  let accion = ['perdio', 'rompio', 'aplasto', 'daño'];
  let que = ['mi tarea', 'mi telefono', 'el carro', 'la ropa'];
  let cuando = ['antes de la clase', 'mientras dormia', 'mientras hacia ejercicio', 'mientras caminaba' ];

  let indQuien = Math.floor(Math.random()*4);
  let indAccion = Math.floor(Math.random()*4);
  let indQue = Math.floor(Math.random()*4);
  let indCuando = Math.floor(Math.random()*4);
  
  let mensaje = quien[indQuien] + " " + accion[indAccion] + " " + que[indQue] + " " + cuando[indCuando];
  
  
  document.querySelector('#excusa').innerHTML=mensaje;
  console.log("Hello Rigo from the console!");
  
};

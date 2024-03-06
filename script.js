//  let resultado /  let num -> resultado   -> num(0) + resultado = resultado  
//          0               5        5            10    +    5          15

let exibir = document.querySelector("#exibir");
let acumulador = "";
let resultado = 0;
let salvarClick = "";
let verificarVirugla = true;

const um = document.querySelector("#um");
const dois = document.querySelector("#dois");
const tres = document.querySelector("#tres");
const quatro = document.querySelector("#quatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const sete = document.querySelector("#sete");
const oito = document.querySelector("#oito");
const nove = document.querySelector("#nove");

const soma = document.querySelector("#soma");
const sub = document.querySelector("#sub");
const mult = document.querySelector("#mult");
const div = document.querySelector("#div");

const igual = document.querySelector("#igual");
const apagar = document.querySelector("#apagar");
const C = document.querySelector("#C");
const CE = document.querySelector("#CE");
const virgula = document.querySelector("#virgula");
const porcentagem = document.querySelector("#porcentagem");

zero.addEventListener("click", e =>{
        acumulador = acumulador + "0";
        exibir.innerHTML= acumulador;
});
um.addEventListener("click", e =>{ 
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "1";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "1";
   exibir.innerHTML= acumulador;
   }
});
dois.addEventListener("click", e =>{ 
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "2";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "2";
   exibir.innerHTML= acumulador;
   }
});
tres.addEventListener("click", e =>{ 
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "3";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "3";
   exibir.innerHTML= acumulador;
   }
});
quatro.addEventListener("click", e =>{ 
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "4";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "4";
   exibir.innerHTML= acumulador;
   }
});
cinco.addEventListener("click", e =>{ 
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "5";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "5";
   exibir.innerHTML= acumulador;
   }
});
seis.addEventListener("click", e =>{
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "6";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "6";
   exibir.innerHTML= acumulador;
   }
});
sete.addEventListener("click", e =>{ 
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "7";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "7";
   exibir.innerHTML= acumulador;
   }
});
oito.addEventListener("click", e =>{  
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "8";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "8";
   exibir.innerHTML= acumulador;
   }
});
nove.addEventListener("click", e =>{ 
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + "9";
      exibir.innerHTML= acumulador;
   }else{
   acumulador = acumulador + "9";
   exibir.innerHTML= acumulador;
   }
});

if(acumulador === ""){
   exibir.innerHTML = "0";
}

C.addEventListener("click", e =>{
   acumulador = "";
   salvarClick = "";
   resultado = 0;
   exibir.innerHTML = "0";
});

CE.addEventListener("click", CEFunction());
function CEFunction(){
   acumulador = "";
   exibir.innerHTML = "0";
}

apagar.addEventListener("click", apagarFunction());
function apagarFunction(){
   if (acumulador.length > 0) {
      acumulador = acumulador.slice(0, -1);
      if(acumulador){
         exibir.innerHTML = acumulador;
      }else{
         exibir.innerHTML = "0";
      }
   }
}

igual.addEventListener("click", igualFunction);
function igualFunction(){
   if(salvarClick === "soma"){
      if(acumulador){
      resultado = resultado + parseFloat(acumulador);
      acumulador = "";
      salvarClick = "";
      exibir.innerHTML = resultado; 
      }
}   
   else if(salvarClick === "sub"){  
         if(acumulador){
         resultado = resultado - parseInt(acumulador);
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado;         
         }
   }
   else if(salvarClick === "mult"){ 
         if(acumulador){
         resultado = resultado * parseInt(acumulador);
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado;         
         }
   }
   else if(salvarClick === "div"){ 
         if(acumulador){
         resultado = resultado / parseInt(acumulador);
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado;         
         }
   }
}

document.addEventListener('keydown', function(event){
   console.log(event.key);
  if (event.key >= '0' && event.key <= '9') {
   if((salvarClick === "") && (resultado)){
      resultado = 0;
      acumulador = acumulador + event.key;
      exibir.innerHTML = acumulador;
   }else{
      acumulador = acumulador + event.key;
      exibir.innerHTML = acumulador;
   }

  }
   else if(event.key === '+'){
   somaFunction();
   }
   else if(event.key === '-'){
   subFunction();
   }
   else if(event.key === '*'){
   multFunction();
   }
   else if(event.key === '/'){
   divFunction();
   }
   else if(event.key === ','){
      if(verificarVirugla === true){
         if(acumulador === ""){
            acumulador = "0" + ".";
            exibir.innerHTML = acumulador;
            verificarVirugla = false;
         }else{
         acumulador = acumulador + "."
         exibir.innerHTML = acumulador;
         verificarVirugla = false;''
         }
      }
   }
   else if(event.key === 'Enter'){
     igualFunction();
   }
   else if(event.key === 'Delete'){
      CEFunction();
   }
   else if(event.key === 'Backspace'){
      apagarFunction();
   }
});

virgula.addEventListener("click", e =>{
   if(verificarVirugla === true){
      if(acumulador === ""){
         acumulador = "0" + ".";
         exibir.innerHTML = acumulador;
         verificarVirugla = false;
      }else{
      acumulador = acumulador + "."
      exibir.innerHTML = acumulador;
      verificarVirugla = false;
      }
   }
});

soma.addEventListener("click", somaFunction);
function somaFunction(){
   if((resultado) && (acumulador)){
      salvarClick = "soma";
      verificarVirugla = true;
   }else if((salvarClick !== "soma")){
      salvarClick = "soma";
      verificarVirugla = true;
   if(acumulador){
      resultado = resultado + parseFloat(acumulador);
      acumulador = "";
      verificarVirugla = true;
   }
      else if((acumulador === "") && (resultado)){
      acumulador = "";
      verificarVirugla = true;
   }  
}
}

sub.addEventListener("click", subFunction);
function subFunction(){
   if((resultado) && (acumulador)){
      salvarClick = "sub";
      verificarVirugla = true;
}else if((salvarClick !== "sub")){
   salvarClick = "sub";
   verificarVirugla = true;
if(acumulador){
      resultado = resultado + parseInt(acumulador);
      acumulador = "";
      verificarVirugla = true;
   }
else if((acumulador === "") && (resultado)){
      acumulador = "";
      verificarVirugla = true;
   }
 }
}

mult.addEventListener("click", multFunction);
function multFunction(){
   if((resultado) && (acumulador)){
      salvarClick = "mult";
      verificarVirugla = true;
}else if((salvarClick !== "mult")){
   salvarClick = "mult";
   verificarVirugla = true;
if(acumulador){
      resultado = resultado + parseInt(acumulador);
      acumulador = "";
      verificarVirugla = true;
   }
else if((acumulador === "") && (resultado)){
      acumulador = "";
      verificarVirugla = true;
   }
}
}

div.addEventListener("click", divFunction);
function divFunction(){
   if((resultado) && (acumulador)){
      salvarClick = "div";
      verificarVirugla = true;
}else if((salvarClick !== "div")){
   salvarClick = "div";
   verificarVirugla = true;
if(acumulador){
      resultado = resultado + parseInt(acumulador);
      acumulador = "";
      verificarVirugla = true;
}
else if((acumulador === "") && (resultado)){
      acumulador = "";
      verificarVirugla = true;
   }
}
}

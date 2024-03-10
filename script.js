//  let resultado /  let num -> resultado   -> num(0) + resultado = resultado  
//          0               5        5            10    +    5          15

let exibir = document.querySelector("#exibir");
let acumulador = "";
let resultado = 0;
let salvarClick = "";
let verificarVirugla = true;
let verificarEnter = "";
let VerificarSinal = "";
let num1 = 0;
let num2 = 0;

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

const caixaSecundaria = document.querySelector("#caixaSecundaria");
let exibirSecundario1 = document.querySelector("#exibirSecundario1");
let exibirSecundario2 = document.querySelector("#exibirSecundario2");
let sinal = document.querySelector("#sinal");
const igualSecundario = document.querySelector("#igualSecundario");

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
   igualSecundario.style.visibility = "hidden";
}

C.addEventListener("click", e =>{
   acumulador = "";
   salvarClick = "";
   resultado = 0;
   exibir.innerHTML = "0";
   num1 = 0;
   num2 = 0;
   igualSecundario.style.visibility = "hidden";
   exibirSecundario1.innerHTML = "";
   exibirSecundario2.innerHTML = "";
   sinal.innerHTML = "";
   VerificarSinal = "";
});

CE.addEventListener("click", CEFunction);
function CEFunction(){
   acumulador = "";
   exibir.innerHTML = "0";
   num1 = 0;
   num2 = 0;
   igualSecundario.style.visibility = "hidden";
   exibirSecundario1.innerHTML = "";
   exibirSecundario2.innerHTML = "";
   sinal.innerHTML = "";
   VerificarSinal = "";
   salvarClick = "";
   verificarEnter = "";
   resultado = 0;
}

apagar.addEventListener("click", apagarFunction);
function apagarFunction(){
   if (acumulador.length > 0) {
      var ultimoCaractere = acumulador.slice(-1);
      if(ultimoCaractere === "." || ultimoCaractere === ","){
         verificarVirugla = true;
      }
      acumulador = acumulador.slice(0, -1);
      num1 = 0;
      num2 = 0;
      igualSecundario.style.visibility = "hidden";
      exibirSecundario1.innerHTML = "";
      exibirSecundario2.innerHTML = "";
      sinal.innerHTML = "";
      if(acumulador){
         exibir.innerHTML = acumulador;
      }else{
         exibir.innerHTML = "0";
      }
   }
   else{
      num1 = 0;
      num2 = 0;
      igualSecundario.style.visibility = "hidden";
      exibirSecundario1.innerHTML = "";
      exibirSecundario2.innerHTML = "";
      sinal.innerHTML = "";
   }
}

igual.addEventListener("click", igualFunction);
function igualFunction(){
   if( (acumulador !== "") && ((VerificarSinal === "+") || (VerificarSinal === "-") || (VerificarSinal === "*") || (VerificarSinal === "/") ) ){
      num2 = num2 + parseFloat(acumulador);
      exibirSecundario2.innerHTML = num2;
      igualSecundario.style.visibility = "visible";
      console.log(acumulador);
      console.log(VerificarSinal);
   }
   if(salvarClick === "soma"){
      if(acumulador){
      resultado = resultado + parseFloat(acumulador);
      acumulador = "";
      salvarClick = "";
      exibir.innerHTML = resultado;
      igualSecundario.style.visibility = "visible";
      verificarEnter = "soma";
      }
      ////////////////////////////////////////////////////////////////////////////////////////////////
   } else if(salvarClick === "soma2"){
      resultado = Number(resultado) + Number(acumulador);
      num2 = parseFloat(acumulador);
      exibirSecundario2.innerHTML = num2;
      exibir.innerHTML = resultado;
      acumulador = "";
      salvarClick = "";
      igualSecundario.style.visibility = "visible";
      verificarEnter = "soma";
   }   
   else if(salvarClick === "sub"){  
         if(acumulador){
         resultado = resultado - parseInt(acumulador);
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado; 
         igualSecundario.style.visibility = "visible";
         verificarEnter = "sub";     
         }
   }
   else if(salvarClick === "mult"){ 
         if(acumulador){
         resultado = resultado * parseInt(acumulador);
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado;    
         igualSecundario.style.visibility = "visible";
         verificarEnter = "mult";       
         }
   }
   else if(salvarClick === "div"){ 
         if(acumulador){
         resultado = resultado / parseInt(acumulador);
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado; 
         igualSecundario.style.visibility = "visible";
         verificarEnter = "div";          
         }
   }
   else if(salvarClick === ""){
      if(verificarEnter === "soma"){  
            resultado = Number(resultado);   
            num1 = num1 + num2;
            exibirSecundario1.innerHTML = num1;
            resultado = resultado + num2;
            resultado = resultado.toString();
            exibir.innerHTML = resultado.replace(".", ","); 
      }
      else if(verificarEnter === "sub"){  
         num1 = num1 - num2;
         exibirSecundario1.innerHTML = num1;
         resultado = resultado - num2;
         exibir.innerHTML = resultado;
      }
      else if(verificarEnter === "mult"){
         num1 = num1 * num2;
         exibirSecundario1.innerHTML = num1;
         resultado = resultado * num2;
         exibir.innerHTML = resultado;
      }
      else if(verificarEnter === "div"){
         num1 = num1 / num2;
         exibirSecundario1.innerHTML = num1;
         resultado = resultado / num2;
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
      exibir.innerHTML = acumulador.replace(".",",");
   }else{
      acumulador = acumulador + event.key;
      exibir.innerHTML = acumulador.replace(".",",");
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
            exibir.innerHTML = acumulador.replace(".",",");
            verificarVirugla = false;
         }else{
         acumulador = acumulador + "."
         exibir.innerHTML = acumulador.replace(".",",");
         verificarVirugla = false;
         }
      }
   }
   else if(event.key === 'Enter'){
     igualFunction();
   }
   else if(event.key === 'Delete'){
      num1 = 0;
      num2 = 0;
      resultado = 0;
      igualSecundario.style.visibility = "hidden";
      exibirSecundario1.innerHTML = "";
      exibirSecundario2.innerHTML = "";
      sinal.innerHTML = "";
      verificarVirugla = true;
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
      acumulador = acumulador + ".";
      exibir.innerHTML = acumulador;
      verificarVirugla = false;
      }
   }
});





//colocar comentario quando terminar tudo!

//Função 
soma.addEventListener("click", somaFunction);
function somaFunction(){
   if((resultado) && (acumulador)){
      salvarClick = "soma";
      verificarVirugla = true;
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "+";
      VerificarSinal = "+";
   }
   else if((salvarClick !== "soma")){
   if(acumulador){
      salvarClick = "soma";
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "+";
      VerificarSinal = "+";
      resultado = resultado + parseFloat(acumulador);
      acumulador = "";
      verificarVirugla = true;
   }
   else if((acumulador === "") && (resultado)){
      salvarClick = "soma2";
      acumulador = resultado;
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "+";
      VerificarSinal = "+";
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
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "-";
      VerificarSinal = "-";
   }
   else if((salvarClick !== "sub")){
   if(acumulador){
         salvarClick = "sub";
         num1 = num1 + parseFloat(acumulador);
         exibirSecundario1.innerHTML = num1;
         sinal.innerHTML = "-";
         VerificarSinal = "-";
         resultado = resultado + parseInt(acumulador);
         acumulador = "";
         verificarVirugla = true;
      }
   else if((acumulador === "") && (resultado)){
      salvarClick = "sub2";
      acumulador = resultado;
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "-";
      VerificarSinal = "-";
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
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "×";
   }
   else if((salvarClick !== "mult")){
   if(acumulador){
      salvarClick = "mult";
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "×";
      VerificarSinal = "*"
      resultado = resultado + parseInt(acumulador);
      acumulador = "";
      verificarVirugla = true;
   }
   else if((acumulador === "") && (resultado)){
      salvarClick = "mult2";
      acumulador = resultado;
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "×";
      VerificarSinal = "*";
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
      num1 = num1 + parseFloat(acumulador);
      exibirSecundario1.innerHTML = num1;
      sinal.innerHTML = "÷";
   }
   else if((salvarClick !== "div")){
   if(acumulador){
         salvarClick = "div";
         num1 = num1 + parseFloat(acumulador);
         exibirSecundario1.innerHTML = num1;
         sinal.innerHTML = "÷";
         VerificarSinal = "/";
         resultado = resultado + parseInt(acumulador);
         acumulador = "";
         verificarVirugla = true;
   }
   else if((acumulador === "") && (resultado)){
         salvarClick = "div2";
         acumulador = resultado;
         num1 = num1 + parseFloat(acumulador);
         exibirSecundario1.innerHTML = num1;
         sinal.innerHTML = "÷";
         VerificarSinal = "/";
         acumulador = "";
         verificarVirugla = true;
      }
   }
}

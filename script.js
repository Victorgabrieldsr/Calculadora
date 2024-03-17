//  let resultado /  let num -> resultado   -> num(0) + resultado = resultado  
//          0               5        5            10    +    5          15

// mexer no CEFunction e na somaFunction !! 


let exibir = document.querySelector("#exibir");
let acumulador = "";
let resultado = 0;
let salvarClick = "";
let verificarVirugla = true; // verificar quando vai por a virgula
let verificarFunction = true;  // verificar a function de soma , subtração...  
let verificarEnter = "";
let verificarNum = true;   // verificar pra digitar na variavel num1 ou na num2 
let verificarCE = true;
let verificarApagarNum1 = true;
let verificarApagarNum2 = true;
let num1 = "";
let num2 = "";

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
const maisEMenos = document.querySelector("#maisEMenos");

const caixaSecundaria = document.querySelector("#caixaSecundaria");
let exibirSecundario1 = document.querySelector("#exibirSecundario1");
let exibirSecundario2 = document.querySelector("#exibirSecundario2");
let sinal = document.querySelector("#sinal");
const igualSecundario = document.querySelector("#igualSecundario");

class VerificarToFixedClass{  
   // Uma classe que  verificar quantos numeros vai por depois da virgula
      verificarNumero(numero){
         numero = Number(numero);
         if(numero.toFixed(1).endsWith("0") && numero.toFixed(2).endsWith("0")){
            numero = numero.toFixed(0);
         }
         else if(numero.toFixed(2).endsWith("0")){
            numero = numero.toFixed(1);
            }else{
               numero = numero.toFixed(2);
            }
         numero = String(numero);
         return numero;
      }
}
let verificarToFixedClass = new VerificarToFixedClass();  

      zero.addEventListener("click", e =>{
            if(verificarNum === true){
               num1 = Number(num1);
               if(num1.toFixed(1).startsWith("0")){
                  num1 = "";
                  num1 = String(num1);
               }else{
                  num1 = num1 + "0";
                  exibir.innerHTML= num1;
               }
            } else if(verificarNum === false){
               num2 = Number(num2);
               if(num2.toFixed(1).startsWith("0")){
                  num2 = "";
                  num2 = String(num2);
               }else{
                  num2 = num2 + "0";
                  exibir.innerHTML= num2;
               }
            }
      });
      um.addEventListener("click", e =>{ 
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "1";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "1";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "1";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "1";
            exibir.innerHTML= num2;
         }
         }
      });
      dois.addEventListener("click", e =>{ 
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "2";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "2";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "2";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "2";
            exibir.innerHTML= num2;
         }
         }
      });
      tres.addEventListener("click", e =>{ 
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "3";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "3";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "3";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "3";
            exibir.innerHTML= num2;
         }
         }
      });
      quatro.addEventListener("click", e =>{ 
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "4";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "4";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "4";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "4";
            exibir.innerHTML= num2;
         }
         }
      });
      cinco.addEventListener("click", e =>{ 
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "5";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "5";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "5";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "5";
            exibir.innerHTML= num2;
         }
         }
      });
      seis.addEventListener("click", e =>{
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "6";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "6";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "6";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "6";
            exibir.innerHTML= num2;
         }
         }
      });
      sete.addEventListener("click", e =>{ 
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "7";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "7";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "7";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "7";
            exibir.innerHTML= num2;
         }
         }
      });
      oito.addEventListener("click", e =>{  
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "8";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "8";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "8";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "8";
            exibir.innerHTML= num2;
         }
         }
      });
      nove.addEventListener("click", e =>{ 
         if(verificarNum === true){
            if((salvarClick === "") && (num1)){
               num1 = num1 + "9";
               exibir.innerHTML= num1;
            }else{
            num1 = num1 + "9";
            exibir.innerHTML= num1;
         }
         } else if(verificarNum === false){
            if((salvarClick === "") && (num2)){
               num2 = num2 + "9";
               exibir.innerHTML= num2;
            }else{
            num2 = num2 + "9";
            exibir.innerHTML= num2;
         }
         }
      });
      if(num1 === ""){
         exibir.innerHTML = "0";
         igualSecundario.style.visibility = "hidden";
      }

C.addEventListener("click", e =>{
   salvarClick = "";
   resultado = 0;
   exibir.innerHTML = "0";
   num1 = "";
   num2 = "";
   igualSecundario.style.visibility = "hidden";
   exibirSecundario1.innerHTML = "";
   exibirSecundario2.innerHTML = "";
   sinal.innerHTML = "";
   verificarNum = true;
});
   
CE.addEventListener("click", CEFunction);
function CEFunction(){
   if(num1 && num2 && resultado){
      exibir.innerHTML = "0"; 
      num1 = "";
      num2 = "";
      igualSecundario.style.visibility = "hidden";
      exibirSecundario1.innerHTML = "";
      exibirSecundario2.innerHTML = "";
      sinal.innerHTML = "";
      salvarClick = "";
      verificarEnter = "";
      resultado = 0;
      verificarVirugla = true;
      verificarNum = true;
      console.log("teste1");
   }else if(num1 && num2){
      num2 = "";
      exibir.innerHTML = "0";
      verificarVirugla = true;
      console.log("teste2");
      console.log(num2);
   }else if(num1 && (num2 === "" || num2 === 0)){
      num2 = "";
      exibir.innerHTML = "0";
      verificarVirugla = true;
      console.log("teste3");
   }else if(num1){
      num2 = "";
      num1 = "";
      exibir.innerHTML = "0";
      verificarVirugla = true;
      console.log("teste4");
   }
}

apagar.addEventListener("click", apagarFunction);
function apagarFunction(){
   if(verificarNum === true){
      if(verificarApagarNum1 === true){
         if (num1.length > 0) {
            num1 = num1.slice(0, -1);
      
            var ultimoCaractere = num1.slice(-1);
            if(ultimoCaractere === "." || ultimoCaractere === ","){
               verificarVirugla = true;
            }
            exibir.innerHTML = num1.replace(".",",");
            console.log("num apaga");
         }
         if(num1 === ""){
            exibir.innerHTML = "0";
         }
      }
   }else if(verificarNum === false){
       if(verificarApagarNum2 === true){
         console.log(num2);
         console.log(num2.length);
         if (num2.length > 0) {
            console.log("apagar else");
            num2 = num2.slice(0, -1);

            var ultimoCaractere = num2.slice(-1);
            if(ultimoCaractere === "." || ultimoCaractere === ","){
               verificarVirugla = true;
            }
               exibir.innerHTML = num2.replace(".",",");  
            }
            if(num2 === ""){
               exibir.innerHTML = "0";
            }
      }
      else if(verificarApagarNum2 === false){
         salvarClick = "";
         igualSecundario.style.visibility = "hidden";
         exibirSecundario1.innerHTML = "";
         exibirSecundario2.innerHTML = "";
         sinal.innerHTML = "";
         verificarNum = true;
         verificarApagarNum2 = true;
         verificarApagarNum1 = false;
         console.log("apagar if");
         }
   }
}

igual.addEventListener("click", igualFunction);
function igualFunction(){
   if(salvarClick === "soma"){
      if(num2){
         num2 = verificarToFixedClass.verificarNumero(num2);
         exibirSecundario2.innerHTML = num2.replace(".",",");

         resultado = Number(num1) + Number(num2);
         resultado = verificarToFixedClass.verificarNumero(resultado);
         exibir.innerHTML = resultado.replace(".", ",");
 
         igualSecundario.style.visibility = "visible";
         verificarEnter = "soma";
         salvarClick = "";
         verificarNum = false;
         verificarFunction = true;
         verificarApagarNum2 = false;
         console.log("igual soma1");
      }
   }
   else if(salvarClick === "sub"){  
         if(num2){
            num2 = verificarToFixedClass.verificarNumero(num2);
            exibirSecundario2.innerHTML = num2.replace(".",",");
   
            resultado = Number(num1) - Number(num2);
            resultado = verificarToFixedClass.verificarNumero(resultado);
            exibir.innerHTML = resultado.replace(".", ",");
            
            igualSecundario.style.visibility = "visible";
            verificarEnter = "sub";
            salvarClick = "";
            verificarNum = false;
            verificarFunction = true;
            verificarApagarNum2 = false;
            console.log("igual sub1");
         } 
   }
   else if(salvarClick === "mult"){ 
      if(num2){
         num2 = verificarToFixedClass.verificarNumero(num2);
         exibirSecundario2.innerHTML = num2.replace(".",",");

         resultado = Number(num1) * Number(num2);
         resultado = verificarToFixedClass.verificarNumero(resultado);
         exibir.innerHTML = resultado.replace(".", ",");

         igualSecundario.style.visibility = "visible";
         verificarEnter = "mult";
         salvarClick = "";
         verificarNum = false;
         verificarFunction = true;
         verificarApagarNum2 = false;
         console.log("igual mult1");
      }
   }   
   else if(salvarClick === "div"){ 
      if(num2){
         num2 = verificarToFixedClass.verificarNumero(num2);
         exibirSecundario2.innerHTML = num2.replace(".",",");

         resultado = Number(num1) / Number(num2);
         resultado = verificarToFixedClass.verificarNumero(resultado);
         exibir.innerHTML = resultado.replace(".", ",");

         igualSecundario.style.visibility = "visible";
         verificarEnter = "sub";
         salvarClick = "";
         verificarNum = false;
         verificarFunction = true;
         verificarApagarNum2 = false;
         console.log("igual sub1");
      }
   }
   else if(salvarClick === ""){
         if(verificarEnter === "soma"){  
               num1 = Number(num1) + Number(num2);
               num1 = verificarToFixedClass.verificarNumero(num1);
               exibirSecundario1.innerHTML = num1.replace(".",",");

               resultado = Number(resultado) + Number(num2);
               resultado = verificarToFixedClass.verificarNumero(resultado);
               exibir.innerHTML = resultado.replace(".", ",");

               console.log("vazio soma");
               console.log(num1);
               console.log(num2);
               console.log(resultado);
         }
         else if(verificarEnter === "sub"){  
               num1 = Number(num1) - Number(num2);
               num1 = verificarToFixedClass.verificarNumero(num1);
               exibirSecundario1.innerHTML = num1.replace(".",",");

               resultado = Number(resultado) - Number(num2);
               resultado = verificarToFixedClass.verificarNumero(resultado);
               exibir.innerHTML = resultado.replace(".", ",");

               console.log("vazio sub");
               console.log(num1);
               console.log(num2);
               console.log(resultado);
         }
         else if(verificarEnter === "mult"){
               num1 = Number(num1) * Number(num2);
               num1 = verificarToFixedClass.verificarNumero(num1);
               exibirSecundario1.innerHTML = num1.replace(".",",");

               resultado = Number(resultado) * Number(num2);
               resultado = verificarToFixedClass.verificarNumero(resultado);
               exibir.innerHTML = resultado.replace(".", ",");

               console.log("vazio mult");
               console.log(num1);
               console.log(num2);
               console.log(resultado);
         }
         else if(verificarEnter === "div"){
            num1 = Number(num1) / Number(num2);
            num1 = verificarToFixedClass.verificarNumero(num1);
            exibirSecundario1.innerHTML = num1.replace(".",",");

            resultado = Number(resultado) / Number(num2);
            resultado = verificarToFixedClass.verificarNumero(resultado);
            exibir.innerHTML = resultado.replace(".", ",");

            console.log("vazio div");
            console.log(num1);
            console.log(num2);
            console.log(resultado);
         }
   } 
}

document.addEventListener('keydown', function(event){
   
      console.log(event.key);
   if(event.key == '0'){
      if(verificarNum === true){
         num1 = Number(num1);
         if(num1.toFixed(1).startsWith("0")){
            num1 = "";
            num1 = String(num1);
         }else{
            num1 = num1 + "0";
            exibir.innerHTML= num1;
         }
      } else if(verificarNum === false){
         num2 = Number(num2);
         if(num2.toFixed(1).startsWith("0")){
            num2 = "";
            num2 = String(num2);
         }else{
            num2 = num2 + "0";
            exibir.innerHTML= num2;
         }
      }
   }
   else if (event.key >= '1' && event.key <= '9') {
      if(verificarNum === true){    
            num1 = num1 + event.key;
            exibir.innerHTML = num1.replace(".",",");
            verificarFunction = true; 
            verificarApagarNum2 = true;
      } else if(verificarNum === false){
         num2 = num2 + event.key;
         exibir.innerHTML = num2.replace(".",",");
         verificarApagarNum2 = true;
      }
   } else if(event.key === '+'){
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
      virgulaFunction();
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
   else if(event.key === '%'){
      porcentagemFunction();
   }
});

//colocar comentario quando terminar tudo!

//Função 

virgula.addEventListener("click", virgulaFunction);
function virgulaFunction(){
   if(verificarVirugla === true){
      if(verificarNum === true){
         if(num1 === ""){
            if(num1 && num2){
               CEFunction();
               num1 = "0" + ".";
               exibir.innerHTML = num1.replace(".",",");
               verificarVirugla = false;
            } else{
               num1 = "0" + ".";
               exibir.innerHTML = num1.replace(".",",");
               verificarVirugla = false;
            }
         }else if(num1 !== ""){
            num1 = num1 + "."
            exibir.innerHTML = num1.replace(".",",");
            verificarVirugla = false;
         }
      } else if(verificarNum === false){
         if(num2 === ""){
            if(num1 && num2){
               CEFunction();
               num2 = "0" + ".";
               exibir.innerHTML = num2.replace(".",",");
               verificarVirugla = false;
            } else{
               num2 = "0" + ".";
               exibir.innerHTML = num2.replace(".",",");
               verificarVirugla = false;
            }
         }else if(num2 !== ""){
            num2 = num2 + ".";
            exibir.innerHTML = num2.replace(".",",");
            verificarVirugla = false;
         }
      }
   }


}

soma.addEventListener("click", somaFunction);
function somaFunction(){
   if((num1)){
      if(verificarFunction === true){
         if(num1 && num2){
         salvarClick = "soma";
         verificarVirugla = true;      
         num1 = Number(resultado);
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",","); 
         num2 = "";
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "+";
         verificarNum = false;
         verificarFunction = false;
         verificarApagarNum2 = true;

         console.log("if true soma1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
      }else{
         salvarClick = "soma";
         verificarVirugla = true;
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",",");
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "+";
         num2 = "";
         verificarNum = false;
         verificarFunction = false;
         verificarApagarNum2 = true;

         console.log("else True soma1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
         }
      }
      else if(verificarFunction === false){
         salvarClick = "soma";
         verificarVirugla = true;
         num1 = Number(num1) + Number(num2);
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",",");
         num2 = "";
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "+";
         verificarNum = false;
         verificarApagarNum2 = true;

         console.log("false Soma1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
      }
   }
}

sub.addEventListener("click", subFunction);
function subFunction(){
   if((num1)){
      if(verificarFunction === true){
         if(num1 && num2){
            salvarClick = "sub";
            verificarVirugla = true;    
            num1 = Number(resultado);
            num1 = verificarToFixedClass.verificarNumero(num1);
            exibirSecundario1.innerHTML = num1.replace(".", ",");
            exibir.innerHTML = num1.replace(".",",");
            exibirSecundario2.innerHTML = "";
            igualSecundario.style.visibility = "hidden";
            sinal.innerHTML = "-";
            num2 = "";
            verificarNum = false;
            verificarFunction = false;
            verificarApagarNum2 = true;

            console.log("if true sub1 --");
            console.log(num1);
            console.log(num2);
            console.log(resultado);
         }else{
            salvarClick = "sub";
            verificarVirugla = true;
            num1 = verificarToFixedClass.verificarNumero(num1);
            exibirSecundario1.innerHTML = num1.replace(".", ",");
            exibir.innerHTML = num1.replace(".",",");
            num2 = "";
            exibirSecundario2.innerHTML = "";
            igualSecundario.style.visibility = "hidden";
            sinal.innerHTML = "-";
            verificarFunction = false;
            verificarNum = false;
            verificarApagarNum2 = true;

            console.log("TRUE sub1 --");
            console.log(num1);
            console.log(num2);
            console.log(resultado);
         }
      }
      else if(verificarFunction === false){      
         salvarClick = "sub";
         verificarVirugla = true;  
         num1 = Number(num1) - Number(num2);
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",",");             
         num2 = "";
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "-";
         verificarNum = false;
         verificarApagarNum2 = true;

         console.log("false sub1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
      }
   }
}

mult.addEventListener("click", multFunction);
function multFunction(){
   if((num1)){
      if(verificarFunction === true){
         if(num1 && num2){
         salvarClick = "mult";
         verificarVirugla = true;       
         num1 = Number(resultado);
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",",");     
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "×";
         num2 = "";
         verificarNum = false;
         verificarFunction = false;

         console.log("if true mult1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
         }else{
         salvarClick = "mult";
         verificarVirugla = true;   
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",",");   
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "×";
         num2 = "";
         verificarNum = false;
         verificarFunction = false;

         console.log("else True mult1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
         }
      }
      else if(verificarFunction === false){
         salvarClick = "mult";
         verificarVirugla = true;
         num1 = Number(num1) * Number(num2);
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",",");    
         num2 = "";
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "×";
         verificarNum = false;

         console.log("false Mult1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
      }
   }
}

div.addEventListener("click", divFunction);
function divFunction(){
   if((num1)){
      if(verificarFunction === true){
         if(num1 && num2){
            salvarClick = "div";
            verificarVirugla = true;    
            
            num1 = Number(resultado);
            num1 = verificarToFixedClass.verificarNumero(num1);
            exibirSecundario1.innerHTML = num1.replace(".", ",");
            exibir.innerHTML = num1.replace(".",",");
            
            exibirSecundario2.innerHTML = "";
            igualSecundario.style.visibility = "hidden";
            sinal.innerHTML = "÷";
            num2 = "";
            verificarNum = false;
            verificarFunction = false;

            console.log("if true div1 --");
            console.log(num1);
            console.log(num2);
            console.log(resultado);
         }else{
            salvarClick = "div";
            verificarVirugla = true;
            
            num1 = verificarToFixedClass.verificarNumero(num1);
            exibirSecundario1.innerHTML = num1.replace(".", ",");
            exibir.innerHTML = num1.replace(".",",");
            
            exibirSecundario2.innerHTML = "";
            igualSecundario.style.visibility = "hidden";
            sinal.innerHTML = "÷";
            num2 = "";
            verificarNum = false;
            verificarFunction = false;

            console.log("else True div1 --");
            console.log(num1);
            console.log(num2);
            console.log(resultado);
         }
      }
      else if(verificarFunction === false){
         salvarClick = "div";
         verificarVirugla = true;
         num1 = Number(num1) / Number(num2);
         num1 = verificarToFixedClass.verificarNumero(num1);
         exibirSecundario1.innerHTML = num1.replace(".", ",");
         exibir.innerHTML = num1.replace(".",",");
         
         num2 = "";
         exibirSecundario2.innerHTML = "";
         igualSecundario.style.visibility = "hidden";
         sinal.innerHTML = "÷";
         verificarNum = false;

         console.log("false div1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
      }
   }
}

porcentagem.addEventListener("click", porcentagemFunction);
function porcentagemFunction(){
   if(num1 && num2 && salvarClick === "mult"){
         verificarVirugla = true;
         num2 = num2 / 100;
         num2 = verificarToFixedClass.verificarNumero(num2);
         exibirSecundario2.innerHTML = num2.replace(".",",");
         exibir.innerHTML = num2.replace(".",",");

         console.log("if porcentagem1 --");
         console.log(num1);
         console.log(num2);
         console.log(resultado);
   }else if(num1 && num2){
      verificarVirugla = true;
      num2 = verificarToFixedClass.verificarNumero(num2);
      exibirSecundario2.innerHTML = num2.replace(".",",");

      console.log("else if porcentagem1 --");
      console.log(num1);
      console.log(num2);
      console.log(resultado);
   }
}

maisEMenos.addEventListener("click", maisEMenosFunction);
function maisEMenosFunction(){
   if(verificarFunction === true){
      if(num1){
         num1 = -num1;
         exibir.innerHTML = num1;
      }
   }else if(verificarFunction === false){
      if(num2){
      num2 = -num2;
      exibir.innerHTML = num2;
      }
   }
}
//  let resultado /  let num -> resultado   -> num(0) + resultado = resultado  
//          0               5        5            10    +    5          15

let exibir = document.querySelector("#exibir");
let acumulador = "";
let resultado = 0;
let salvarClick;
let verificar = true;

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

if(acumulador === ""){
    exibir.innerHTML = "0";
}

const clean = document.querySelector("#clean");
clean.addEventListener("click", e =>{
    acumulador = "";
    resultado = 0;
    exibir.innerHTML = "0";
});

zero.addEventListener("click", e =>{
    if(acumulador >= 1){
        acumulador = acumulador + "0";
        exibir.innerHTML= acumulador
    }
});
um.addEventListener("click", e =>{ 
   acumulador = acumulador + "1";
   exibir.innerHTML= acumulador
});
dois.addEventListener("click", e =>{ 
   acumulador = acumulador + "2";
   exibir.innerHTML= acumulador
});
tres.addEventListener("click", e =>{ 
   acumulador = acumulador + "3";
   exibir.innerHTML= acumulador
});
quatro.addEventListener("click", e =>{ 
   acumulador = acumulador + "4";
   exibir.innerHTML= acumulador
});
cinco.addEventListener("click", e =>{ 
   acumulador = acumulador + "5";
   exibir.innerHTML= acumulador
});
seis.addEventListener("click", e =>{
   acumulador = acumulador + "6";
   exibir.innerHTML= acumulador
});
sete.addEventListener("click", e =>{ 
   acumulador = acumulador + "7";
   exibir.innerHTML= acumulador
});
oito.addEventListener("click", e =>{  
   acumulador = acumulador + "8";
   exibir.innerHTML= acumulador
});
nove.addEventListener("click", e =>{ 
   acumulador = acumulador + "9";
   exibir.innerHTML= acumulador
});


igual.addEventListener("click", e =>{
   if(salvarClick === "soma"){   
         if(acumulador){
         resultado = resultado + parseInt(acumulador)
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado;          
      }
   }
   else if(salvarClick === "sub"){   
         if(acumulador){
         resultado = resultado - parseInt(acumulador)
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado;         
         }
         
   }
   else if(salvarClick === "mult"){   
         if(acumulador){
         resultado = resultado * parseInt(acumulador)
         }
      
          exibir.innerHTML = resultado;         
   }
   else if(salvarClick === "div"){   
         if(acumulador){
         resultado = resultado / parseInt(acumulador)
         }

          exibir.innerHTML = resultado;         
   }
});

apagar.addEventListener("click",e =>{
      if (acumulador.length > 0) {
         acumulador = acumulador.slice(0, -1);
         if(acumulador){
            exibir.innerHTML = acumulador;
         }
      }
});

soma.addEventListener("click", e =>{
   if(acumulador){
   resultado = resultado + parseInt(acumulador)
   salvarClick = "soma";
   acumulador = "";
   exibir.innerHTML = resultado;
   }
});

sub.addEventListener("click", e => {
   console.log("acumulador:" + acumulador);
   if (acumulador) {
      if (verificar) {
         resultado += parseInt(acumulador);
         console.log("primeiro!");
      } else {
         resultado -= parseInt(acumulador);
         console.log("segundo");
      }
      salvarClick = "sub";
      acumulador = "";
      exibir.innerHTML = resultado;
   }
});


mult.addEventListener("click", e =>{ 
   if(acumulador){
   resultado = resultado + parseInt(acumulador)
   salvarClick = "mult";
   acumulador = "";
   exibir.innerHTML = resultado;
   }
});

div.addEventListener("click", e =>{
   if(acumulador){
   resultado = resultado + parseInt(acumulador)
   salvarClick = "div";
   acumulador = "";
   exibir.innerHTML = resultado;
   }
});

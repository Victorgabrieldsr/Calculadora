//  let resultado /  let num -> resultado   -> num(0) + resultado = resultado  
//          0               5        5            10    +    5          15

let exibir = document.querySelector("#exibir");
let acumulador = "";
let resultado = 0;
let salvarClick = "";

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

zero.addEventListener("click", e =>{
        acumulador = acumulador + "0";
        exibir.innerHTML= acumulador
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

if(acumulador === ""){
   exibir.innerHTML = "0";
}

C.addEventListener("click", e =>{
   acumulador = "";
   salvarClick = "";
   resultado = 0;
   exibir.innerHTML = "0";
});

CE.addEventListener("click", e =>{
acumulador = "";
exibir.innerHTML = "0";
});

apagar.addEventListener("click",e =>{
   if (acumulador.length > 0) {
      acumulador = acumulador.slice(0, -1);
      if(acumulador){
         exibir.innerHTML = acumulador;
      }else{
         exibir.innerHTML = "0";
      }
   }
});

igual.addEventListener("click", e =>{

   if(salvarClick === "soma"){
         if(acumulador){
         resultado = resultado + parseInt(acumulador);
         console.log(acumulador);
         console.log("--------------");
         acumulador = "";
         salvarClick = "";
         exibir.innerHTML = resultado; 
         }
   }   
      else if(salvarClick === "sub"){  
            if(acumulador){
            resultado = resultado - parseInt(acumulador);
            console.log(acumulador);
            console.log("--------------");
            acumulador = "";
            salvarClick = "";
            exibir.innerHTML = resultado;         
            }
      }
      else if(salvarClick === "mult"){ 
            if(acumulador){
            resultado = resultado * parseInt(acumulador);
            console.log(acumulador);
            console.log("--------------");
            acumulador = "";
            salvarClick = "";
            exibir.innerHTML = resultado;         
            }
      }
      else if(salvarClick === "div"){ 
            if(acumulador){
            resultado = resultado / parseInt(acumulador);
            console.log(acumulador);
            console.log("--------------");
            acumulador = "";
            salvarClick = "";
            exibir.innerHTML = resultado;         
            }
      }
 
         

});


 

   soma.addEventListener("click", e =>{
 
       if((resultado) && (acumulador)){
         console.log(acumulador);
         console.log("--novo-if--");
         salvarClick = "soma";
      }else if((salvarClick !== "soma")){
         salvarClick = "soma";
         if(acumulador){
            resultado = resultado + parseInt(acumulador);
            console.log(acumulador);
            console.log("--------------");
            acumulador = "";
         }
         else if((acumulador === "") && (resultado)){
            console.log(acumulador);
            console.log("--else if--");
            acumulador = "";
         }  
      }
   });

sub.addEventListener("click", e => {
    
      if((resultado) && (acumulador)){
         console.log(acumulador);
         console.log("--novo-if--");
         salvarClick = "sub";
      }else if((salvarClick !== "sub")){
      salvarClick = "sub";
      if(acumulador){
         resultado = resultado + parseInt(acumulador);
         console.log(acumulador);
         console.log("--------------");
         acumulador = "";
      }
      else if((acumulador === "") && (resultado)){
         console.log(acumulador);
         console.log("--else if--");
         acumulador = "";
      }
   }
});


mult.addEventListener("click", e =>{ 

      if((resultado) && (acumulador)){
         console.log(acumulador);
         console.log("--novo-if--");
         salvarClick = "mult";
      }else if((salvarClick !== "mult")){
      salvarClick = "mult";
      if(acumulador){
         resultado = resultado + parseInt(acumulador);
         console.log(acumulador);
         console.log("--------------");
         acumulador = "";
      }
      else if((acumulador === "") && (resultado)){
         console.log(acumulador);
         console.log("--else if--");
         acumulador = "";
      }
   }
});

div.addEventListener("click", e =>{ 

      if((resultado) && (acumulador)){
         console.log(acumulador);
         console.log("--novo-if--");
         salvarClick = "div";
      }else if((salvarClick !== "div")){
      salvarClick = "div";
      if(acumulador){
         resultado = resultado + parseInt(acumulador);
         console.log(acumulador);
         console.log("--------------");
         acumulador = "";
      }
      else if((acumulador === "") && (resultado)){
         console.log(acumulador);
         console.log("--else if--");
         acumulador = "";
      }
   }
});


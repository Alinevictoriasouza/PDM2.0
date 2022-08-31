window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function entradaIMC(){
   const nome = document.getElementById("nome").value;
   const idade = document.getElementById("idade").value;
   const sexo = document.getElementById("sexo").value;
   const altura = document.getElementById("altura").value;
   const peso = document.getElementById("peso").value;

   const calculoIMC = peso / (altura * altura);

    if(nome != "" && idade != "" && sexo != "" && altura != "" && peso != ""){

      if(calculoIMC < 18.5){
        resultadoIMC.innerHTML = nome + ", do sexo " + sexo +", tem "+ idade +" anos, e está abaixo do peso normal !"
        IMC.innerHTML = calculoIMC.toFixed(1)
      }else if (calculoIMC > 18.5 && calculoIMC < 24.9){
        resultadoIMC.innerHTML = nome + ", do sexo " + sexo +", tem "+ idade +" anos, e está com peso normal !!"
        IMC.innerHTML = calculoIMC.toFixed(1)
      }else if (calculoIMC > 25 && calculoIMC < 29.9){
        resultadoIMC.innerHTML = nome + ", do sexo " + sexo +", tem "+ idade +" anos, e está com excesso de peso !!"
        IMC.innerHTML = calculoIMC.toFixed(1)
      }else if (calculoIMC > 30 && calculoIMC < 34.9) {
        resultadoIMC.innerHTML = nome + ", do sexo " + sexo +", tem "+ idade + " anos, e está com obesidade classe I !!"
        IMC.innerHTML = calculoIMC.toFixed(1)
      }else if (calculoIMC > 35 && calculoIMC < 39.9) {
        resultadoIMC.innerHTML = nome + ", do sexo " + sexo +", tem "+ idade +" anos, e está com obesidade classe II !!"
        IMC.innerHTML = calculoIMC.toFixed(1)
      }else if (calculoIMC > 39.9) {
        resultadoIMC.innerHTML = nome + ", do sexo " + sexo +", tem "+ idade +" anos, e está com obesidade classe III !!"
        IMC.innerHTML = calculoIMC.toFixed(1)}
    }else {
        document.getElementById('resultadoIMC').innerHTML = "Tente novamente"
      }
}
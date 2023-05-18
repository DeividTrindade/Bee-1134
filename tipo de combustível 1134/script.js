let alcool 
let gasolina  
let diesel 
let fim
let numero = document.getElementById("inptUm")
let resultado = document.getElementById("divResultado")

alcool = 0
gasolina = 0
diesel = 0

function Clicar(){
if(numero.value == 1){
  alcool = alcool + 1
  resultado.innerHTML = "Muito obrigado <br> Álcool: " + alcool +"<br> gasolina: " + gasolina + "<br> Diesel: " + diesel
}else{
  if(numero.value == 2){
    gasolina = gasolina + 1
    resultado.innerHTML = "Muito obrigado <br> Álcool: " + alcool +"<br> gasolina: " + gasolina + "<br> Diesel: " + diesel
  }else{
    if(numero.value == 3){
      diesel = diesel + 1
      resultado.innerHTML = "Muito obrigado <br> Álcool: " + alcool +"<br> gasolina: " + gasolina + "<br> Diesel: " + diesel
    }else{
      if(numero.value == 4){
        alcool = 0
        gasolina = 0
        diesel = 0
        resultado.innerHTML = "Muito obrigado <br> Álcool: " + alcool +"<br> gasolina: " + gasolina + "<br> Diesel: " + diesel
      }else{
        resultado.innerHTML = "insira um codico existente"
      }
    }
  }
}


}

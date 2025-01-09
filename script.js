const container = document.querySelector("section");
const controller = document.querySelector(".opener");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
display.innerHTML = "";
const btn = document.querySelector("button");

function put(val){
    display.innerText = display.innerHTML + val;
}
function calc(){
  display.innerHTML =   eval(display.innerHTML);
}
function clr(){
    container.style.height = "20px";
    calculator.style.height = "0";
    calculator.style.padding = "0";
    controller.classList.toggle("ctrl");
    controller.style.transition = "9s";
    
}
function clrAll(){
    display.innerHTML = '';
}
function opener(){
    container.style.height = "330px";
    calculator.style.height = "300px";
    calculator.style.padding = "15px 10px";
    controller.style.transition = "0.2s";
    controller.classList.toggle("ctrl");
}
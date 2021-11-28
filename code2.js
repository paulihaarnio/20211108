let button= document.querySelector("button")

button.addEventListener("click",buttonclicked)

function buttonclicked(){
   console.log("moi");
}

button.onclick=buttonclicked()
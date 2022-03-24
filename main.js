(function (){
  
  let btnYes = document.getElementById("btn_yes");
  let btnNo = document.getElementById("btn_no");
  
  btnYes.addEventListener("click", () => {
    alert("Gracias por darme una oportunidad 🥰")
  })
  
  btnNo.addEventListener("mouseover", () => {
    
    let y = Math.round(Math.random() * 80);
    let x = Math.round(Math.random() * 80);
    
    btnNo.style.top = y + "%";
    btnNo.style.left = x + "%";
    
    
  })
})

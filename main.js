function burger() {
  document.getElementById("drink").style.display = "none";
  document.getElementById("burger").style.display = "block";
  document.getElementById("burgerbtn").style.background = "#35b8be";
  document.getElementById("drinkbtn").style.background = "transparent";
  document.getElementById("burgerbtn").style.color = "#fff";
  document.getElementById("drinkbtn").style.color = "#000";
}

function drink() {
  document.getElementById("drink").style.display = "block";
  document.getElementById("burger").style.display = "none";
  document.getElementById("drinkbtn").style.background = "#35b8be";
  document.getElementById("drinkbtn").style.color = "#fff";
  document.getElementById("burgerbtn").style.background = "transparent";
  document.getElementById("burgerbtn").style.color = "#000";
}

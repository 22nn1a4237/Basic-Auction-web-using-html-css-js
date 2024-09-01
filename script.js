function placeBid() {
  confirm("Do you want to palce bid");
  prompt("Enter the amount","");
  
}
const Buttons = 
  document.querySelectorAll(".art-card button");
Buttons.forEach(button => {
  button.addEventListener("click", placeBid);
});

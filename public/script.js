console.log("aa");
const btn = document.getElementById("themeBtn");
console.log(btn);
btn.addEventListener("click", () => {
  const current = document.body.classList.toggle("dark");
  localStorage.setItem("theme", current ? "dark" : "light");
});
window.addEventListener("load", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
  }
});
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
})
//input.addEventListener('input', function () {
    //if (input.value.length < 3) {
    //  showError('Занадто коротко');
   // }
 // });
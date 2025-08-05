console.log("aa");
const btn = document.getElementById("themeBtn");
console.log(btn);
if (btn) {
  btn.addEventListener("click", () => {
    const current = document.body.classList.toggle("dark");
    localStorage.setItem("theme", current ? "dark" : "light");
  });
};
window.addEventListener("load", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
  }
});
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  });
  const data1 = await res.json();
  if (data1.succes) {
    document.getElementById('msg').textContent =
      data1.message
  } else {
    document.getElementById('msg').textContent =
      data1.message
  };

})

let codeForm = document.getElementById("codeForm");
if (codeForm) {
  codeForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const code = document.getElementById('treasure_code').value;
    const res = await fetch('/codeForm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    console.log(res);
    if (res.redirected) {
      window.location.href = res.url; // якщо бекенд робить redirect
    } else {
      const data = await res.json();
      console.log(data);
      //if (data.error){
      //  document.getElementById('result').textContent = data.error
      //}
      document.getElementById('result').textContent =
        data.error || 'Успіх!';
    }
  });
};
//input.addEventListener('input', function () {
    //if (input.value.length < 3) {
    //  showError('Занадто коротко');
   // }
 // });
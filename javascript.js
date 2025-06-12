const input = document.getElementById("miInput");
const h1 = document.getElementById("miH1");

input.addEventListener("input", function () {
    h1.textContent = input.value;
});
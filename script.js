//your JS code here. If required.
const P = document.getElementById("counter");
const Btn = document.getElementById("incrementBtn");

let count = 0;

Btn.addEventListener('click', () => {
alert(count);
count++;
P.textContent = count;
});

//your JS code here. If required.
const P = document.getElementById("counter");
const Btn = document.getElementById("incrementBtn");

let count = 0;

Btn.addEventListener('click', () => {
alert(count);
count++;
P.textContent = count;
});
/*const Btn = document.quereySelector("incrementBtn");
Btn.addEventListener("click",() =>{
	const P = documnet.createElement("p");
	P.innerText = 0;
	P.className = "counter";
	alert(P.innerText++);
});*/
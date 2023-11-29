//your JS code here. If required.
const Btn = document.quereySelector("incrementBtn");
Btn.addEventListener("click",() =>{
	const P = documnet.createElement("p");
	P.innerText = 0;
	P.className = "counter";
	alert(P.innerText++);
});
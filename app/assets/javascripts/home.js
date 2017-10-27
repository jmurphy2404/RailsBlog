document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".signupbutton").addEventListener("click", function () {
		console.log("hi");
		document.querySelector(".signupmodal").style.display = "block";
	})
})

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".sign").addEventListener("click", function () {
		console.log("hi");
		document.querySelector(".signupmodal").style.display = "block";
	})
})

document.addEventListener("DOMContentLoaded", function () {
document.querySelector(".signupclose").addEventListener("click", function (){
	console.log("hi");
	document.querySelector(".signupmodal").style.display = "none";
	})
})

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".login").addEventListener("click", function () {
		console.log("hi");
		document.querySelector(".loginmodal").style.display = "block";
	})
})

document.addEventListener("DOMContentLoaded", function () {
document.querySelector(".loginclose").addEventListener("click", function (){
	console.log("hi");
	document.querySelector(".loginmodal").style.display = "none";
	})
})
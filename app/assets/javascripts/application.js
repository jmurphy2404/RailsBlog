// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
// require turbolinks
//= require_tree .

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".signupbutton").addEventListener("click", function () {
		document.querySelector(".signupmodal").style.display = "block";
	})
})

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".sign").addEventListener("click", function () {
		document.querySelector(".signupmodal").style.display = "block";
	})
})

document.addEventListener("DOMContentLoaded", function () {
document.querySelector(".signupclose").addEventListener("click", function (){
	document.querySelector(".signupmodal").style.display = "none";
	})
})

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".login").addEventListener("click", function () {
		document.querySelector(".loginmodal").style.display = "block";
	})
})

document.addEventListener("DOMContentLoaded", function () {
document.querySelector(".loginclose").addEventListener("click", function (){
	document.querySelector(".loginmodal").style.display = "none";
	})
})
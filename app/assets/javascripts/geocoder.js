let geocoder;
let address;
let coords;

document.addEventListener("DOMContentLoaded", function(){
	geocoder = new google.maps.Geocoder();
	address = document.getElementById("location")
	function getPlace (address){
		geocoder.geocode({'address': address}, function (results, status){
		coords = results[0].geometry.location;
		var temp1 = results[0].geometry.location.lat();
		var temp2 = results[0].geometry.location.lng();
		document.getElementById("latitude").value = temp1;
		document.getElementById("longitude").value = temp2;
		})
	}
	document.getElementById("geocoder_submit").addEventListener("click", function(e){
		e.preventDefault();
		getPlace(address.value);
		document.getElementById("submit-post").style.visibility = "visible";
		document.getElementById("geocoder_submit").style.visibility = "hidden";
	})
})



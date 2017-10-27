let geocoder;
let address;
let coords;




document.addEventListener("DOMContentLoaded", function(){
	geocoder = new google.maps.Geocoder();
	address = document.getElementById("post[location]")
	function getPlace (address){
		geocoder.geocode({'address': address}, function (results, status){
		console.log(results);
		coords = results[0].geometry.location;
		var temp1 = results[0].geometry.location.lat();
		var temp2 = results[0].geometry.location.lng();


		// var temp1 = coords.toString();
		// var temp2 = temp1.slice(1,-1);
		// var temp3 = temp2.split(", ");
		// var temp4 = temp3[0];
		// var temp5 = temp3[1];
		// console.log(temp4);
		// console.log(temp5);
		document.getElementById("post[latitude]").value = temp1;
		document.getElementById("post[longitude]").value = temp2;
	})
	
	}

	document.getElementById("geocoder_submit").addEventListener("click", function(e){
		e.preventDefault();
		getPlace(address.value);
		document.getElementById("submit-post").style.visibility = "visible";
		document.getElementById("geocoder_submit").style.visibility = "hidden";

	})
})


// document.addEventListener("turbolinks:load", function(){
// 	geocoder = new google.maps.Geocoder();
// 	address = document.getElementById("geocoder_input").value

// 	function getCoordinates (address, callback){
// 		var coordinates;
// 		geocoder.geocode({'address': address}, function (results, status){
// 		coords_obj = results[0].geometry.location;
// 		coordinates = [coords_obj.nb, coords_obj.ob];
// 		callback(coordinates);
// 	})
// 	document.getElementById("latitude").innerHTML = coordinates[0];
// 	document.getElementById("longitude").innerHTML = coordinates[1];
// }

// 	document.getElementById("geocoder_submit").addEventListener("click", function(e){
// 		e.preventDefault();
// 		getCoordinates(address);
// 	})
// })


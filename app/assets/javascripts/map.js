	var map;


      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: lng},
          zoom: 8
        });
      }

setTimeout(initMap, 10);
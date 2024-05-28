function initMap() {
    //LAT Y LOG -34.87005994992035, -61.51842589578265
    const myLatLng = { lat: -34.87005994992035, lng: -61.51842589578265 };

    const mapOptions = {
      zoom: 15,
      center: myLatLng,
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Ubicación especificada",
    });
  }
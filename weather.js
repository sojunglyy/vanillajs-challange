functiion onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.logitude;
}

function onGeoError(){
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition();

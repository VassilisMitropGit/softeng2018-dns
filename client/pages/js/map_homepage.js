var mymarker = null;
var mymap;
var data;
var markerdata;
var geocodeService = L.esri.Geocoding.geocodeService();
var parameters;
var parsedata;
var script_tag = document.getElementById("searcher");
var shops = JSON.parse(script_tag.getAttribute("name"));
var id;

function newMarker(e) {
    var mylatlng = new L.LatLng(e.lat,e.lng);
    id = e.id;
    mymarker = L.marker(mylatlng).addTo(mymap).bindPopup(e.name).on('click', (e)=>{
        markerdata = {
            shopId: id
        }
    });
}

function confirmShop() {
    if (mymarker) {
        document.getElementById("shopId").value = markerdata.shopId;
    } else {
        console.error("Error: No marker selected.")
    }
}

function myMap() {    
    navigator.geolocation.getCurrentPosition(function (location) {

        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
        mymap = L.map('map').setView(latlng, 16);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
        }).addTo(mymap);


        console.log(shops[0].tags);

        for ( var i=0; i<shops.length; i++){
            newMarker(shops[i]);
        }
    });
}

/* This method is called when the page loads */
function onLoad() {
    myMap();
}
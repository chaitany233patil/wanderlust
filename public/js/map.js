// Initialize the map and set default view
var map = L.map("map").setView([51.505, -0.09], 5); // Default view of Europe
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Function to find and locate the city
function findLocation() {
  var city = document.getElementById("cityInput").value;
  var geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${city}`;

  fetch(geocodeUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        var lat = data[0].lat;
        var lon = data[0].lon;

        // Set the map view to the location
        map.setView([lat, lon], 13);

        // Add a marker at the location
        L.marker([lat, lon]).addTo(map).bindPopup(`<b>${city}</b>`).openPopup();
      } else {
        alert("City not found!");
      }
    })
    .catch((error) => console.log(error));
}

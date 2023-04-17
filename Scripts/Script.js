document.getElementById("FindMe").addEventListener("click", getLocation);
document.getElementById("NewCord").addEventListener("click",setNewCord);
document.getElementById("NewCordTwo").addEventListener("click", setNewCordTwo);
class Location {
  constructor(name, latitude, longitude) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.visited = false; 
  }
}

const place1 = new Location("Home", 59.38259, 16.527164);
const place2 = new Location("Gym", 59.395986215006104, 16.470572922816746);
const place3 = new Location("Willys", 59.37645591254406, 16.50156300275876);
const place4 = new Location("Hospital", 59.36336200939321, 16.536073554837238);
const place5 = new Location("School", 59.370009309720494, 16.512152727565557);

let points = 0; 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      
      checkLocation(latitude, longitude);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function checkLocation(latitude, longitude) {
  let places = [place1, place2, place3, place4, place5];
  
  for (let i = 0; i < places.length; i++) {
    let place = places[i];
    let distance = calculateDistance(latitude, longitude, place.latitude, place.longitude);
    
    
    if (distance < 100 && !place.visited) {
      place.visited = true; 
      points += 1; 
      let placeElement = document.getElementById(place.name);

      ShowLongCords.innerHTML = longitude
      ShowLatCords.innerHTML =  latitude

      //  {$place[i] =  ($status[i].innerHTML = "True")};
      if(place.name = "Home"){
        status1.innerHTML = "True"
      }
      else if(place.name = "Gym"){
        status2.innerHTML = "True"
      }
      else if(place.name = "Willys"){
        status3.innerHTML = "True"
      }
      else if(place.name = "Hospital"){
        status4.innerHTML = "True"
      }
      else if(place.name = "School"){
        status5.innerHTML = "True"
      }
      

      alert("You are near " + place.name + "! You earned 1 point.");

    }
  }
}

function calculateDistance(latitude1, longitude1, latitude2, longitude2) {
  const R = 6371e3; // Earth's radius in meters
  const lat1 = latitude1 * Math.PI/180; // latitude1 in radians
  const lat2 = latitude2 * Math.PI/180; // latitude2 in radians
  const latdif = (latitude2 - latitude1) * Math.PI/180; // difference in latitude in radians
  const longdif = (longitude2 - longitude1) * Math.PI/180; // difference in longitude in radians
  
  const a = Math.sin(latdif/2) * Math.sin(latdif/2) +
          Math.cos(lat1) * Math.cos(lat2) *
          Math.sin(longdif/2) * Math.sin(longdif/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  const d = R * c; // distance in meters
  return d;
}

function setNewCord() {

  alert("You are near Gym! You earned 1 point");

  const latitude = 59.395986215006104;
  const longitude = 16.470572922816746;

  document.getElementById("ShowLatCords").innerHTML = latitude;
  document.getElementById("ShowLongCords").innerHTML = longitude;
  document.getElementById("status2").innerHTML = "True";
  
}
function setNewCordTwo() {

  alert("You are near Willys! You earned 1 point");

  const latitude = 59.37645591254406;
  const longitude = 16.50156300275876;

  document.getElementById("ShowLatCords").innerHTML = latitude;
  document.getElementById("ShowLongCords").innerHTML = longitude;
  document.getElementById("status3").innerHTML = "True";
  
}

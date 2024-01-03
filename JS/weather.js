const API_KEY = "127938e9c4b3f4145dfb1d41220c0fa6";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json()
        .then(data => {
                console.log(data);
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        }));
  }
  function onGeoError() { 
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


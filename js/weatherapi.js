const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=044274b4c5ca15e21469345d0f1121ea&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temperature = document.querySelector('#temperature')
 temperature.textContent = jsObject.main.temp;

 const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
 const desc = jsObject.weather[0].description;
 document.getElementById('imagesrc').textContent = imagesrc;
 document.getElementById('icon').setAttribute('src', imagesrc);
 document.getElementById('icon').setAttribute('alt', desc);

  });
// whenever the page load this function executes
window.addEventListener("load", () => {
  // setting longitude and latiitude
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      //  Pulling Out the info
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // const proxy = "https://cors-anywhere.herokuapp.com/corsdemo";
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a0efb4ab1cc3a4b305b7f4f266257a5b
`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const main = data.weather[0].description;
          // console.log(main);
          // SETTING UP THE DOM ELEMENT
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = main;
        });
    });
  }
});

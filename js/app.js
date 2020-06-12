const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img")

const upateUI = data => {
//   console.log(data);

const {cityDetails, weatherConditions} = data;

  details.innerHTML = `
    <h3 class="my-3">${cityDetails.EnglishName}</h3>
    <h5 style="font-size: 13px">${weatherConditions.WeatherText}</h5>
    <div class="display-4 my-4">
        <span>${weatherConditions.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    const iconSrc = `img/icons/${weatherConditions.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    
    let timeSrc = weatherConditions.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

};

const updateCity = async city => {
  // console.log(city)
  const cityDetails = await getCity(city);
  const weatherConditions = await getWeatherCondition(cityDetails.Key);

  return {
    cityDetails,
    weatherConditions
  };
};

cityForm.addEventListener("submit", e => {
  e.preventDefault();

  const cityName = cityForm.city.value.trim();

  cityForm.reset();

  updateCity(cityName)
    .then(data => upateUI(data))
    .catch(err => console.log(err));
});

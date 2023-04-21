let key = "6b4b16c710ce682eeea7fe1d68b33f2a";

const setInfor = (infor) => {
  var resultEmpty = document.querySelector(".result_empty");
  var resultError = document.querySelector(".result_error");
  var resultSearch = document.querySelector(".result_search");
  var cityName = document.querySelector(".city");
  var iconStatus = document.querySelector(".icon");
  var tempDefault = document.querySelector(".def");
  var tempMax = document.querySelector(".max");
  var tempMin = document.querySelector(".min");
  var descriptionSatus = document.querySelector(".description");
  var searchError = document.querySelector(".search_error");

  if (infor.cod === 200) {
    resultEmpty.style.display = "none";
    resultSearch.style.display = "flex";

    cityName.innerHTML = infor.name;
    iconStatus.src = `https://openweathermap.org/img/wn/${infor.weather[0].icon}.png`;
    tempDefault.innerHTML = `${Math.floor(infor.main.temp)} °C`;
    tempMax.innerHTML = `max ⇈ ${Math.floor(infor.main.temp_max)} °C`;
    tempMin.innerHTML = `min ⇊ ${Math.floor(infor.main.temp_min)} °C`;
    descriptionSatus.innerHTML = infor.weather[0].description;
  } else {
    resultEmpty.style.display = "none";
    resultError.style.display = "flex";

    searchError.innerHTML = infor.message;
  }
};

async function getAPI(city) {
  const dataAPI = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  setInfor(dataAPI);
}

const formValues = () => {
  var inputSearch = document.querySelector(".input_search");

  getAPI(inputSearch.value);
};

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({ country }) {
  const [weatherData, setWeatherData] = useState(null);
  //   console.log(country.latlng);
  const api_key = import.meta.env.VITE_API_KEY;
  const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`;

  useEffect(() => {
    axios
      .get(WeatherUrl)
      .then((res) => {
        console.log(res.data);
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h1>Weather in {country.capital}</h1>
          <p>temperature {weatherData.main.temp} Celcius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>wind {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading IP data...</p>
      )}
    </div>
  );
}

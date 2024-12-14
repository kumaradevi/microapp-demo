import React, { useState } from "react";
import "./WeatherApp.css";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const getWeatherDetails = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2bb62c6ae189e4fd084570e698bd6b2`
      );
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
      console.log(data.name);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <div className="card">
        <div className="input-container">
          <input type="text" onChange={(e) => setCity(e.target.value)} />
          <button onClick={getWeatherDetails}>Get</button>
        </div>
        <div className="detail-container">
          <div>
           <h3>Name: <span>{weatherData.name}</span></h3>
            
          </div>
          <div>
           <h3>Humidity: <span>{weatherData?.main?.humidity}</span></h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

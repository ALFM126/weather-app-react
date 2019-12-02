import React, { useState } from "react";
import Icon from "./Icon";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoading(true);
  }

  function formatHours(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  if (loading && forecast.city.name === props.city) {
    return (
      <div className="Forecast row">
        {forecast.list.slice(0, 6).map(function(weather) {
          return (
            <div className="col">
              <p>{formatHours(new Date(weather.dt * 1000))}</p>
              <Icon symbol={weather.weather[0].icon} />
              <p>{Math.round(weather.main.temp)}°C</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    const apiKey = "8c52e04f20e2246bd2fa1beb9972163c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

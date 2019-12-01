import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Time from "./Time";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});
  function handleResponse(response) {
    setData({
      time: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-sm-7">
            <form>
              <input
                type="search"
                placeholder="Enter City..."
                autoComplete="off"
                autoFocus="on"
              ></input>
              <input type="submit" value="Search"></input>
            </form>
          </div>
          <div className="col-sm-5">
            <h1>{data.city}</h1>
          </div>
        </div>
        <p>
          <Time date={data.time} />
        </p>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix">
              <img
                src={data.iconUrl}
                alt={data.description}
                className="float-left"
              ></img>
              <div className="float-left">
                <span className="temperature">
                  {Math.round(data.temperature)}
                </span>
                <a href="/">ºC</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li className="text-capitalize">{data.description}</li>
              <li>Humidity: {data.humidity}%</li>
              <li>Wind Speed: {Math.round(data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8c52e04f20e2246bd2fa1beb9972163c";
    let city = "Braga";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

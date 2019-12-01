import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Time from "./Time";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});
  const [city, setCity] = useState(data.city);

  function handleResponse(response) {
    setData({
      time: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity
    });

    setReady(true);
  }

  function search() {
    const apiKey = "8c52e04f20e2246bd2fa1beb9972163c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-sm-7">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter City..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCity}
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
          <div className="col-sm-7">
            <div className="clearfix">
              <div className="row">
                <div className="col-sm-6">
                  <Icon symbol={data.icon} />
                </div>
                <div className="col-sm-6">
                  <Temperature celsius={data.temperature} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
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

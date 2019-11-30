import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm-6">
          <form>
            <input
              type="search"
              placeholder="Enter City..."
              autocomplete="off"
            ></input>
            <input type="submit" value="Search"></input>
          </form>
        </div>
        <div className="col-sm-6">
          <h1>Braga</h1>
        </div>
      </div>
      <p>Sunday, November 10, 2019</p>
      <p>22:00</p>
      <div className="row">
        <div className="col-sm-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="description"
          ></img>{" "}
          6<a href="/">ºC</a>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Rain</li>
            <li>Humidity: 66%</li>
            <li>Wind Speed: 11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

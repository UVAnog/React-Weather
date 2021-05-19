import React from "react";
import "../styles/weather.style.css";

const Weather = ({
  cityname,
  weatherIcon,
  temp_celsius,
  temp_min,
  temp_max,
  description,
}) => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius, convert to Farenheit */}
        {temp_celsius ? (
          <h1 className="py-2">
            {Math.round(temp_celsius * (9 / 5) + 32)}&deg;
          </h1>
        ) : null}

        {/* get max and min temps, convert to farenheit*/}
        {maxminTemp(
          Math.round(temp_min * (9 / 5) + 32),
          Math.round(temp_max * (9 / 5) + 32)
        )}

        {/* Weather description */}
        <h4 className="py-3">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

import React from "react";
import "../styles/form.style.css";

const Form = ({loadweather, error}) => {
  return (
    <div className="container h-100">
      <form onSubmit={loadweather}>
        <div>{error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Zip"
              name="zipcode"
              autoComplete="off"
            />
          </div>
          <br />
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = () => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City or Zipcode.
    </div>
  );
};

export default Form;
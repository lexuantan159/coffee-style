import React from "react";
import Headline from "../head-line/Headline";
import "./FormSignUp.scss";

const FormSignUp = () => {
  return (
    <>
      <div className="form">
        <div className="form-wrap">
          <Headline colorChange = {true} title="sign up and get free coffee bags" />
          <h1 className="form-heading">Coffee Updates</h1>

          <form action="require">
            <input
              className="form-input"
              type="gmail"
              placeholder="CUSTOMER@COFFEESTYLE.IO"
            />
            <button className="form-btn">subcribe</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSignUp;

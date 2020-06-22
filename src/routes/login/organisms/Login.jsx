import React from "react";

import "../atoms/index.scss";
import LoginForm from "../molecules/LoginForm";

const Container = ({ userInput, onSubmit }) => {
  return (
    <div className="container-fluid login-container-fluid">
      <div className="login-container shadow-lg col-xl-4 col-lg-5 col-md-8 col-sm-8 col-10">
        <div className="login-form ml-5">
          <LoginForm userInput={userInput} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Container;

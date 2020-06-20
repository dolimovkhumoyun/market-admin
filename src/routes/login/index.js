import React, { useState, useEffect } from "react";

import Container from "./organisms/Login";
import { auth } from "../../api";

const Login = (props) => {
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const [response, setResponse] = useState({ isFetching: true });

  useEffect(() => {
    if (!response.isFetching && response.data.statusCode === 200) props.history.push("/app");
    else if (response.hasError) console.log(response.error);
    // eslint-disable-next-line
  }, [response]);

  const onSubmit = (values) => {
    setUserInput(values);
    auth(values, setResponse);
  };
  return <Container userInput={userInput} onSubmit={onSubmit} />;
};

export default Login;

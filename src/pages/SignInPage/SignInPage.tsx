import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { authActions } from "../../store/authentication";
import Header from "../../components/Header/Header";
import useHttpLogin from "../../hooks/useHttpLogin";
import { RequestConfiguration } from "../../hooks/useHttpLogin";
import classes from './SignInPage.module.css';

const LogInPage = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { isLoading, error, sendRequest } = useHttpLogin();
  const dispatchAction = useDispatch();
  const history = useHistory();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailInputRef.current === null || passwordInputRef.current === null) return;

    const configRequest: RequestConfiguration = {
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVUEgqiIBcdFDIYQRYWtOQOsmTWS98vA8",
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email: emailInputRef.current?.value,
        password: passwordInputRef.current?.value
      }
    }

    const data = sendRequest(configRequest);
    //getting response data
    data.then(result => {
      if (result === undefined) {
        alert(error);
      }
      else {
        if(emailInputRef.current){
          dispatchAction(authActions.login({ email: emailInputRef.current.value, token : result.idToken }));
          localStorage.setItem("email", emailInputRef.current.value);
          localStorage.setItem("token", result.idToken);
        }
        history.push('/');
      }
    });
  }

  const onLoadingElement = isLoading ? <p>Loading...</p> :  <button type="submit">Sign In</button>;

  return (
    <div>
      <Header />
      <div className={classes.content}>
        <form onSubmit={onSubmitHandler}>
          <h2>Join our community</h2>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={emailInputRef} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordInputRef} />
          {onLoadingElement}
        </form>
      </div>
    </div>
  );
};

export default LogInPage;

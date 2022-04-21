import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { authActions } from "../../store/authentication";
import Header from "../../components/Header/Header";
import useHttpLogin from "../../hooks/useHttpLogin";
import { RequestConfiguration } from "../../hooks/useHttpLogin";
import classes from './SignInPage.module.css';

const SignInPage = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { isLoading, sendRequest } = useHttpLogin();
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
        password: passwordInputRef.current?.value,
        returnSecureToken: true
      }
    }

    const data = sendRequest(configRequest);
    //getting response data
    data.then(result => {
      if (result === undefined) {
        alert("Konto o podanym emailu już istnieje");
      }
      else {
        if (emailInputRef.current) {
          dispatchAction(authActions.login({ email: emailInputRef.current.value, token: result.idToken }));
        }
        history.push('/');
      }
    });
  }

  const onLoadingElement = isLoading ? <label className={classes.label}>Loading...</label> : <button className={classes.button} type="submit">Sign In</button>;

  return (
    <div>
      <Header />
      <div className={classes.content}>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <h2>Join our community</h2>
          <label className={classes.label} htmlFor="email">Email</label>
          <input className={classes.input} type="email" name="email" ref={emailInputRef} />
          <label className={classes.label} htmlFor="password">Password</label>
          <input className={classes.input} type="password" name="password" ref={passwordInputRef} />
          {onLoadingElement}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

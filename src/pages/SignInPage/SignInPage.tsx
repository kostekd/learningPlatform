import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import useHttpLogin from "../../hooks/useHttpLogin";
import { RequestConfiguration } from "../../hooks/useHttpLogin";

const LogInPage = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { isLoading, error, sendRequest } = useHttpLogin();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(emailInputRef === null || passwordInputRef === null) return;

    const configRequest: RequestConfiguration ={
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVUEgqiIBcdFDIYQRYWtOQOsmTWS98vA8",
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:{
        email: emailInputRef.current?.value,
        password: passwordInputRef.current?.value
      }
    }

    const data = sendRequest(configRequest);
    //getting response data
    data.then(result=>{
      console.log(result);
    })
  }

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={emailInputRef}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordInputRef}/>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;

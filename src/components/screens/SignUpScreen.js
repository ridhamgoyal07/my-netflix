import React, { useRef } from "react";
import "./SignUpScreen.css";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase.js";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    // console.log(auth);

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((UserCredentials) => {
        console.log(UserCredentials);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" name="email" />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          name="password"
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          New to Netflix ? <span onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;

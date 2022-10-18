import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import Signup from "./signup";
import Signin from "./signin";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  const { signInWithGoogle, signInWithGithub, signInWithFacebook } =
    useUserContext();
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <button onClick={signInWithGoogle}>Continue with Google</button>
      <button onClick={signInWithGithub}>Continue with Github</button>
      <button onClick={signInWithFacebook}>Continue with Facebook</button>

      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an account?"}
      </p>
    </div>
  );
};

export default Auth;

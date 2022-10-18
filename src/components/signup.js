import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2>New User</h2>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="name" placeholder="Name" ref={nameRef} />
        <input type="password" placeholder="Password" ref={psdRef} />
        <button type="submit">Register </button>
      </form>
    </div>
  );
};

export default Signup;

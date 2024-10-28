// import React from "react";
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <div id="wd-signup-screen" style={{ width: "400px" }}>
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2"/>
      <input placeholder="password" type="password" className="form-control mb-2"/>
      <input placeholder="verify password" type="password" className="form-control mb-2"/>
      <Link to="/kanbas/account/profile" className="btn btn-primary w-100 mb-2">Sign up </Link>
      <Link to="/kanbas/account/signin" >Sign in </Link>
    </div>
);}

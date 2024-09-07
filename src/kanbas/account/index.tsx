import { Profile } from "./Profile";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { Routes, Route, Navigate } from "react-router";

export const Account = () => {
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <Routes>
        <Route path="/" element={<Navigate to="kanbas/account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

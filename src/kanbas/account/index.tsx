import { Profile } from "./Profile";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { AccountNavigation } from "./Navigation";
import { Routes, Route, Navigate } from "react-router";

export const Account = () => {
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            {/* <h2>Account</h2> */}
            <Routes>
              <Route path="/" element={<Navigate to="kanbas/account/signin" />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}

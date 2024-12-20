import { Profile } from "./Profile";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { AccountNavigation } from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Users from "./Users";

export const Account = () => {
    const { currentUser } = useSelector((state: any) => state.accountReducer)
    return (
        <div id="wd-account-screen">
            <table>
                <tr>
                    <td valign="top">
                        <AccountNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to={currentUser ? "/kanbas/account/profile" : "/kanbas/account/signin"} />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/users/:uid" element={<Users />} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    )
}

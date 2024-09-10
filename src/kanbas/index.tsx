import { Account } from "./account";
import { Dashboard } from "./Dashboard";
import { KanbasNavigation } from "./Navigation";
import { Courses } from "./courses";
import { Routes, Route, Navigate } from "react-router";

export const Kanbas = () => {
    return (
        <div id="wd-kanbas">
            <table>
                <tr>
                    <td valign="top">
                        <KanbasNavigation />
                    </td>
                    <td valign="top">
                        <h1>Kanbas</h1>
                        <Routes>
                            <Route path="/" element={<Navigate to="account" />} />
                            <Route path="/account/*" element={<Account />} />
                            <Route path="/dashboard/*" element={<Dashboard />} />
                            <Route path="/courses/:cid/*" element={<Courses />} />
                            <Route path="/calendar" element={<h1>Calendar</h1>} />
                            <Route path="/inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
  );}
  
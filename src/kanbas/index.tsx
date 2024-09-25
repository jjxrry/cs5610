import { Account } from "./account";
import { Dashboard } from "./Dashboard";
import { KanbasNavigation } from "./Navigation";
import { Courses } from "./courses";
import { Routes, Route, Navigate } from "react-router";
import "./styles.css"

export const Kanbas = () => {
    return (
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">    
                <Routes>
                    <Route path="/" element={<Navigate to="account" />} />
                    <Route path="/account/*" element={<Account />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/courses/:cid/*" element={<Courses />} />
                    <Route path="/calendar" element={<h1>Calendar</h1>} />
                    <Route path="/inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
  );}
  
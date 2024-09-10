import { Account } from "./account";
import { Dashboard } from "./Dashboard";
import { Routes, Route, Navigate } from "react-router";

export const Kanbas = () => {
    return (
        <div id="wd-kanbas">
            <h1>Kanbas</h1>
            <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/account/*" element={<Account />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </div>
  );}
  
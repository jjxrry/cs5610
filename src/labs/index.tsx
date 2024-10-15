import { Lab1 } from "./lab1";
import { Route, Routes, Navigate } from "react-router";
import { TOC } from "./TOC";
import { Lab2 } from "./lab2";
import { Lab3 } from "./lab3";
import { Lab4 } from "./lab4";

export const Labs = () => {
    return (
        <div id="wd-labs">
            <h1>Labs</h1>
            <h2>Jerry Gao</h2>
            <p>Section 20595 | 7PM (EST) Thursday Lecture</p>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="lab1" />} />
                <Route path="lab1" element={<Lab1 />} />
                <Route path="lab2" element={<Lab2 />} />
                <Route path="lab3/*" element={<Lab3 />} />
                <Route path="lab4" element={<Lab4 />} />
            </Routes>
        </div>
    );
}

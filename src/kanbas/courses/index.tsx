import { Modules } from "./modules";
import { CoursesNavigation } from "./Navigation";
import { Navigate, Route, Routes } from "react-router";

export const Courses = () => {
    return (
      <div id="wd-courses">
        <h2>Course 1234</h2>
        <hr />
            <table>
                <tr>
                    <td valign="top">
                        <CoursesNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                        <Route path="/" element={<Navigate to="home" />} />
                        <Route path="home" element={<h2>Home</h2>} />
                        <Route path="modules" element={<Modules />} />
                        <Route path="assignments" element={<h2>Assignments</h2>} />
                        <Route path="assignments/:aid" element={<h2>Assignment Editor</h2>} />
                        <Route path="people" element={<h2>People</h2>} />
                        </Routes>
                    </td>
                </tr>
            </table>
      </div>
  );}
  
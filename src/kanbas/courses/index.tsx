import { Assignments } from "./assignments";
import { AssignmentEditor } from "./assignments/Editor";
import { Home } from "./home";
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
                        <Route path="home" element={<Home />} />
                        <Route path="modules" element={<Modules />} />
                        <Route path="assignments" element={<Assignments />} />
                        <Route path="assignments/:aid" element={< AssignmentEditor />} />
                        <Route path="people" element={<h2>People</h2>} />
                        </Routes>
                    </td>
                </tr>
            </table>
      </div>
  );}
  
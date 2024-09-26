import { FaAlignJustify } from "react-icons/fa";
import { Assignments } from "./assignments";
import { AssignmentEditor } from "./assignments/Editor";
import { Home } from "./home";
import { Modules } from "./modules";
import { CoursesNavigation } from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import { PeopleTable } from "./people/Table";

export const Courses = () => {
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            Course 1234</h2> < hr/>
        <div className="d-flex">
            <div className="d-none d-md-block">
                <CoursesNavigation />
            </div>
            <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="modules" element={<Modules />} />
                    <Route path="assignments" element={<Assignments />} />
                    <Route path="assignments/:aid" element={< AssignmentEditor />} />
                    <Route path="people" element={<PeopleTable />} />
                </Routes>
            </div>
        </div>
      </div>
  );}
  
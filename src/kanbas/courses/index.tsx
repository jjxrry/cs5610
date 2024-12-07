import { FaAlignJustify } from "react-icons/fa";
import { Assignments } from "./assignments";
import { AssignmentEditor } from "./assignments/Editor";
import { Home } from "./home";
import { Modules } from "./modules";
import { CoursesNavigation } from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { PeopleTable } from "./people/Table";

export const Courses = ({ courses }: { courses: any[] }) => {
    const { cid } = useParams()
    const { pathname } = useLocation()
    const course = courses.find((course) => course._id === cid)
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split('/')[4].charAt(0).toUpperCase() + pathname.split('/')[4].slice(1)}
            </h2>
            <hr />
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
    );
}


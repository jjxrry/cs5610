import { Link } from "react-router-dom";
export const CoursesNavigation = () => {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        <Link id="wd-course-home-link" to="/kanbas/courses/:cid/home" className="list-group-item active border border-0">
            Home
        </Link> 
        <Link id="wd-course-modules-link" to="/kanbas/courses/:cid/modules" className="list-group-item text-danger border border-0">
            Modules
        </Link> 
        <Link id="wd-course-piazza-link" to="/kanbas/courses/:cid/piazza" className="list-group-item text-danger border border-0">
            Piazza
        </Link> 
        <Link id="wd-course-zoom-link" to="/kanbas/courses/:cid/zoom" className="list-group-item text-danger border border-0">
            Zoom
        </Link> 
        <Link id="wd-course-quizzes-link" to="/kanbas/courses/:cid/assignments" className="list-group-item text-danger border border-0">
            Assignments
        </Link> 
        <Link id="wd-course-assignments-link" to="/kanbas/courses/:cid/quizzes" className="list-group-item text-danger border border-0">
            Quizzes
        </Link> 
        <Link id="wd-course-grades-link" to="/kanbas/courses/:cid/grades" className="list-group-item text-danger border border-0">
            Grades
        </Link> 
        <Link id="wd-course-people-link" to="/kanbas/courses/:cid/people" className="list-group-item text-danger border border-0">
            People
        </Link> 
    </div>
);}

import { Link } from "react-router-dom";
export const CoursesNavigation = () => {
  return (
    <div id="wd-courses-navigation">
      <Link id="wd-course-home-link"    to="/kanbas/courses/1234/home">Home</Link><br/>
      <Link id="wd-course-modules-link" to="/kanbas/courses/1234/modules">Modules
        </Link><br/>
      <Link id="wd-course-piazza-link"  to="/kanbas/courses/1234/piazza">Piazza</Link><br/>
      <Link id="wd-course-zoom-link"    to="/kanbas/courses/1234/zoom">Zoom</Link><br/>
      <Link id="wd-course-quizzes-link" to="/kanbas/courses/1234/assignments">
          Assignments</Link><br/>
      <Link id="wd-course-assignments-link" to="/kanbas/courses/1234/quizzes">Quizzes
        </Link><br/>
      <Link id="wd-course-grades-link"  to="/kanbas/courses/1234/grades">Grades</Link><br/>
      <Link id="wd-course-people-link"  to="/kanbas/people">People</Link><br/>
    </div>
);}

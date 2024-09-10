import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="./vite.svg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/kanbas/courses/1234/home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/kanbas/courses/1234/home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="./vite.svg" width={200} />
            <div>
            <Link className="wd-dashboard-course-link"
                to="/kanbas/courses/1234/home">
                CS5610 Web Dev
            </Link>
            <p className="wd-dashboard-course-title">
                Full Stack software developer
            </p>
            <Link to="/kanbas/courses/1234/home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 2 </div>
        <div className="wd-dashboard-course"> 3 </div>
        <div className="wd-dashboard-course"> 4 </div>
        <div className="wd-dashboard-course"> 5 </div>
        <div className="wd-dashboard-course"> 6 </div>
      </div>
    </div>
  );
}

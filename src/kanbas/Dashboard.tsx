import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/kanbas/courses/1234/home">
                        <img src="./images/reactjs.png" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS1234 React JS and Web Development
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                            Full Stack Development
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/kanbas/courses/1234/home">
                        <img src="./vite.svg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS2212 Front End Development
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                            Front End Build Tools
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/kanbas/courses/1234/home">
                        <img src="./images/aws.png" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS6620 Cloud Computing
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                            AWS Compute Services
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/kanbas/courses/1234/home">
                        <img src="./images/compilers.png" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS5260 Compilers and C Fundamentals
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                            Compiler Fundamentals
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/kanbas/courses/1234/home">
                        <img src="./images/java.png" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS4060 Object Oriented Programming
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                            Java Fundamentals
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/kanbas/courses/1234/home">
                        <img src="./images/db.png" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS6200 Relational Databases
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                            SQL Databases
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/kanbas/courses/1234/home">
                        <img src="./images/math.png" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS5800 Discrete Mathematics
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                            Fundamental Problems
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

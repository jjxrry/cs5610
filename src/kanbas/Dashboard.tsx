import { Link } from "react-router-dom";
import * as db from "./database"
import { useState } from "react";

export const Dashboard = () => {
    const [courses, setCourses] = useState<any[]>(db.courses)
    const [course, setCourse] = useState<any[]>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/reactjs.png", description: "New Description"
    })

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setCourses([...courses, { ...course, ...newCourse }]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId))
    }

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course
                } else {
                    return c
                }
            })
        )
    }

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>New Course</h5> <br />
            <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <br />
            <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse}>
                Add
            </button>
            <button className="btn btn-warning float-end me-2"
                id="wd-update-course-click"
                onClick={updateCourse}>
                Update
            </button>
            <br />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/kanbas/courses/${course._id}/home`}>
                                    <img src={`./images/${course.image}`} width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary"> Go </button>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            deleteCourse(course._id)
                                        }}
                                            className="btn btn-danger float-end"
                                            id="wd-delete-course-click">
                                            Delete
                                        </button>
                                        <button id="wd-edit-course-click"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning me-2 float-end" >
                                            Edit
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

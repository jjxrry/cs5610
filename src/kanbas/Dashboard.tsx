import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "./database"
import { ProtectedControls } from "./courses/modules/ProtectedControls";
import { useState } from "react";

export const Dashboard = (
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }:
        {
            courses: any[]; course: any; setCourse: (course: any) => void
            addNewCourse: () => void; deleteCourse: (course: any) => void
            updateCourse: () => void
        }
) => {

    const { currentUser } = useSelector((state: any) => state.accountReducer)
    const { enrollments } = db

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <ProtectedControls>
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
            </ProtectedControls>
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter((course) =>
                            enrollments.some(
                                (enrollment) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course) => (
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
                                            <ProtectedControls>
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
                                                        e.preventDefault()
                                                        setCourse(course)
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </ProtectedControls>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

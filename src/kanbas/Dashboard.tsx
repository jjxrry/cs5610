import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedControls } from "./courses/modules/ProtectedControls";
import { useState } from "react";
import { enrollCourse, unenrollCourse } from "./courses/enrollments/reducer";
import { ProtectedStudentControls } from "./courses/modules/ProtectedStudentControls";

export const Dashboard = (
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }:
        {
            courses: any[]; course: any; setCourse: (course: any) => void
            addNewCourse: () => void; deleteCourse: (course: any) => void
            updateCourse: () => void
        }
) => {
    const { currentUser } = useSelector((state: any) => state.accountReducer)
    const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments)

    const dispatch = useDispatch()
    const [showAllCourses, setShowAllCourses] = useState(false)

    const [enrollState, setEnrollState] = useState(enrollments)
    // might need to add a useEffect to sync state after mount

    const handleToggleCourses = () => {
        setShowAllCourses(!showAllCourses)
    }

    const handleEnroll = (courseId: string) => {
        const newEnrollment = { user: currentUser._id, course: courseId }
        setEnrollState([...enrollments, newEnrollment])

        dispatch(enrollCourse({ user: currentUser._id, course: courseId }))
    }

    const handleUnenroll = (courseId: string) => {
        const updatedEnrollments = enrollState.filter(
            // @ts-expect-error its fine
            (enrollment) => enrollment.course !== courseId
        )
        setEnrollState(updatedEnrollments)
        dispatch(unenrollCourse({ user: currentUser._id, course: courseId }))
    }

    const courseDisplay = showAllCourses
        ? courses
        : courses.filter((course) =>
            enrollState.some(
                // @ts-expect-error its fine
                (enrollment) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
            )
        )

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
            <h2 id="wd-dashboard-published">Published Courses ({courseDisplay.length})</h2> <hr />
            {currentUser.role === "STUDENT" && (
                <div id="wd-student-enrollment-button">
                    <button className="btn btn-primary float-end me-4" onClick={handleToggleCourses}>
                        {showAllCourses ? "Show Enrollments" : "Show All Courses"}
                    </button>
                    <br />
                </div>
            )}
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courseDisplay
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

                                            <ProtectedStudentControls>
                                                {currentUser.role === "STUDENT" && (
                                                    enrollState.some(
                                                        (enrollment) =>
                                                            enrollment.user === currentUser._id &&
                                                            enrollment.course === course._id
                                                    ) ? (
                                                        <button className="btn btn-danger me-2"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleUnenroll(course._id)
                                                            }}
                                                        >
                                                            Unenroll
                                                        </button>
                                                    ) : (
                                                        <button className="btn btn-success me-2"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleEnroll(course._id)
                                                            }}>
                                                            Enroll
                                                        </button>
                                                    )
                                                )}
                                            </ProtectedStudentControls>

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

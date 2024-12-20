import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { ProtectedControls } from "./courses/modules/ProtectedControls"
import { useEffect, useState } from "react"
// import { enrollCourse, unenrollCourse } from "./courses/enrollments/reducer"
// import { ProtectedStudentControls } from "./courses/modules/ProtectedStudentControls"
import * as courseClient from "./courses/client"
import * as enrollmentClient from "./client"

export const Dashboard = (
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }:
        {
            courses: any[]; course: any; setCourse: (course: any) => void
            addNewCourse: () => void; deleteCourse: (course: any) => void
            updateCourse: () => void
            enrolling: boolean; setEnrolling: (enrolling: boolean) => void
            updateEnrollment: (courseId: string, enrolled: boolean) => void
        }
) => {
    const { currentUser } = useSelector((state: any) => state.accountReducer)
    const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments)
    // const dispatch = useDispatch()

    // const [showAllCourses, setShowAllCourses] = useState(false)
    // @ts-expect-error its fine
    const [enrollState, setEnrollState] = useState<any[]>(enrollments)
    // @ts-expect-error its fine
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        const fetchInitialData = async () => {
            const fetchedAllCourses = await courseClient.fetchAllCourses()
            setAllCourses(fetchedAllCourses)
            const fetchedEnrollments = await enrollmentClient.fetchUserEnrollments(currentUser._id)
            // console.log('fetched enrollments: ', fetchedEnrollments)
            // returned as objects so need to convert
            setEnrollState(Array.from(fetchedEnrollments))
        }

        fetchInitialData()
    }, [currentUser._id])

    // const handleToggleCourses = async () => {
    //     await fetchUpdatedData()
    //     setShowAllCourses(!showAllCourses);
    // }
    //
    // const handleEnroll = async (courseId: string) => {
    //     const newEnrollment = await enrollmentClient.enrollUser(currentUser._id, courseId)
    //     await fetchUpdatedData()
    //     setEnrollState([...enrollments, newEnrollment])
    //     dispatch(enrollCourse({ user: currentUser._id, course: courseId }))
    // }
    //
    // const handleUnenroll = async (courseId: string) => {
    //     const updatedEnrollments = await enrollmentClient.unenrollUser(currentUser._id, courseId)
    //     await fetchUpdatedData()
    //     setEnrollState(updatedEnrollments)
    //     dispatch(unenrollCourse({ user: currentUser._id, course: courseId }))
    // }
    //
    //
    // const fetchUpdatedData = async () => {
    //     try {
    //         const fetchedAllCourses = await courseClient.fetchAllCourses()
    //         setAllCourses(fetchedAllCourses)
    //
    //         if (currentUser._id) {
    //             const updatedEnrollments = await enrollmentClient.fetchUserEnrollments(currentUser._id)
    //             setEnrollState(updatedEnrollments);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching updated data:", error)
    //     }
    // }

    // const enrolledCourseIds = enrollments.map((enrollment: any) => enrollment.course)
    // const enrolledCourses = allCourses.filter((course) => enrolledCourseIds.includes(course._id))
    // const displayedCourses = showAllCourses ? allCourses : enrolledCourses
    // console.log(courses)


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <div id="wd-student-enrollment-button">
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
                <br />
            </div>
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
            {(currentUser.role === "STUDENT" || currentUser.role === "FACULTY") && (
                <div id="wd-student-enrollment-button">
                    {/* <button className="btn btn-primary float-end me-4" onClick={handleToggleCourses}> */}
                    {/*     {showAllCourses ? "Show Enrollments" : "Show All Courses"} */}
                    {/* </button> */}
                    <br />
                </div>
            )}
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                        to={`/kanbas/courses/${course._id}/home`}>
                                        <img src={`./images/${course.image}`} width="100%" height={160} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {enrolling && (
                                                    <button onClick={(event) => {
                                                        event.preventDefault()
                                                        updateEnrollment(course._id, !course.enrolled)
                                                    }}
                                                        className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description}
                                            </p>

                                            {/* <ProtectedStudentControls> */}
                                            {/*     {currentUser.role === "STUDENT" && ( */}
                                            {/*         enrollState.some( */}
                                            {/*             (enrollment) => */}
                                            {/*                 enrollment.user === currentUser._id && */}
                                            {/*                 // @ts-expect-error its fine */}
                                            {/*                 enrollment.course === course._id */}
                                            {/*         ) ? ( */}
                                            {/*             <button className="btn btn-danger me-2" */}
                                            {/*                 onClick={(e) => { */}
                                            {/*                     e.preventDefault(); */}
                                            {/*                     // @ts-expect-error its fine */}
                                            {/*                     handleUnenroll(course._id) */}
                                            {/*                 }} */}
                                            {/*             > */}
                                            {/*                 Unenroll */}
                                            {/*             </button> */}
                                            {/*         ) : ( */}
                                            {/*             <button className="btn btn-success me-2" */}
                                            {/*                 onClick={(e) => { */}
                                            {/*                     e.preventDefault(); */}
                                            {/*                     // @ts-expect-error its fine */}
                                            {/*                     handleEnroll(course._id) */}
                                            {/*                 }}> */}
                                            {/*                 Enroll */}
                                            {/*             </button> */}
                                            {/*         ) */}
                                            {/*     )} */}
                                            {/* </ProtectedStudentControls> */}
                                            {/**/}
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


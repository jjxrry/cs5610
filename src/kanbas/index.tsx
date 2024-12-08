import { Account } from "./account";
import { Dashboard } from "./Dashboard";
import { KanbasNavigation } from "./Navigation";
import { Courses } from "./courses";
import { Routes, Route, Navigate } from "react-router";
import { ProtectedRoute } from "./account/ProtectedRoute";
// import * as db from "./database"
import { useEffect, useState } from "react";
import { store } from "./store"
import { Provider } from "react-redux";
import "./styles.css"
import * as client from "./courses/client"

export const Kanbas = () => {
    const [courses, setCourses] = useState<any[]>([])

    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses()
        setCourses(courses)
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    const [course, setCourse] = useState<any[]>({
        // @ts-expect-error its fine
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/reactjs.png", description: "New Description"
    })

    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course)
        setCourses([...courses, { ...course, ...newCourse }])
    }

    const deleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId)
        setCourses(courses.filter((course) => course._id !== courseId))
    }

    const updateCourse = async () => {
        await client.updateCourse(course)
        setCourses(
            courses.map((c) => {
                // @ts-expect-error its fine
                if (c._id === course._id) {
                    return course
                } else {
                    return c
                }
            })
        )
    }


    return (
        <Provider store={store}>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="account" />} />
                        <Route path="/account/*" element={<Account />} />
                        <Route path="/dashboard/*" element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            </ProtectedRoute>
                        } />
                        <Route path="/courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                        <Route path="/calendar" element={<h1>Calendar</h1>} />
                        <Route path="/inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider >
    )
}


import { Account } from "./account";
import { Dashboard } from "./Dashboard";
import { KanbasNavigation } from "./Navigation";
import { Courses } from "./courses";
import { Routes, Route, Navigate } from "react-router";
import { ProtectedRoute } from "./account/ProtectedRoute";
import * as db from "./database"
import { useState } from "react";
import { store } from "./store"
import { Provider } from "react-redux";
import "./styles.css"

export const Kanbas = () => {
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
    );
}


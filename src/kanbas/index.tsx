import { Account } from "./account";
import { Dashboard } from "./Dashboard";
import { KanbasNavigation } from "./Navigation";
import { Courses } from "./courses";
import { Routes, Route, Navigate } from "react-router";
import { ProtectedRoute } from "./account/ProtectedRoute";
import { useEffect, useState } from "react";
import { store } from "./store"
import { Provider, useSelector } from "react-redux";
import "./styles.css"
import { Session } from "./account/Session"
import * as userClient from "./account/client.ts"
import * as courseClient from "./courses/client.ts"


type RootState = ReturnType<typeof store.getState>

const KanbasContent = () => {
    const [courses, setCourses] = useState<any[]>([])
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [enrolling, setEnrolling] = useState<boolean>(false)

    const findCoursesForUser = async () => {
        try {
            //@ts-expect-error its fine
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            //@ts-expect-error its fine
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            //@ts-expect-error its fine
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };


    const fetchCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(
                //@ts-expect-error its fine
                currentUser._id
            );
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    // const fetchCourses = async () => {
    //     try {
    //         const courses = await courseClient.fetchAllCourses()
    //         setCourses(courses)
    //     } catch (error) {
    //         console.error(error)
    //
    //     }
    // }

    useEffect(() => {
        if (enrolling) {
            fetchCourses();
        } else {
            findCoursesForUser();
        }
    }, [currentUser, enrolling]);

    // useEffect(() => {
    //     fetchCourses()
    // }, [currentUser])

    const [course, setCourse] = useState<any[]>({
        // @ts-expect-error its fine
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/reactjs.png", description: "New Description"
    })

    const addNewCourse = async () => {
        const newCourse = await courseClient.createCourse(course)
        setCourses([...courses, { ...course, newCourse }])
    }

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId)
        setCourses(courses.filter((course) => course._id !== courseId))
    }

    const updateCourse = async () => {
        await courseClient.updateCourse(course)
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
        <Session>
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
                                    enrolling={enrolling}
                                    setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment}
                                />
                            </ProtectedRoute>
                        } />
                        <Route path="/courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                        <Route path="/calendar" element={<h1>Calendar</h1>} />
                        <Route path="/inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    )
}

export const Kanbas = () => {
    return (
        <Provider store={store}>
            <KanbasContent />
        </Provider>
    )
}


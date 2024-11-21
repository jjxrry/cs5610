import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course)
    return data
}

export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course)
    return response.data
}

export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};


export const enrollUser = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENT_API}/enroll`, { userId, courseId })
    return response.data
}

export const unenrollUser = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENT_API}/unenroll`, { userId, courseId })
    return response.data
}

export const fetchUserEnrollments = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENT_API}/${userId}`)
    // console.log(response.data)
    return response.data
}

import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true })

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/courses`


// get all assignments
export const fetchAllAssignments = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}/assignments`)
    return response.data
}

// delete an assignment
export const deleteAssignment = async (courseId: string, assignmentId: string) => {

    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${courseId}/assignments/${assignmentId}`)
    return response.data
}

// update an assignment
export const updateAssignment = async (courseId: string, assignmentId: string, assignment: any) => {
    const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${courseId}/assignments/${assignmentId}`, assignment)
    return response.data
}


// create an assignment
export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(`${ASSIGNMENTS_API}/${courseId}/assignments`, assignment)
    return response.data
}

export const fetchAssignmentById = async (courseId: string, assignmentId: string) => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}/assignments/${assignmentId}`)
    return data
}

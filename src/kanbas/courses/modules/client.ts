import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`
const MODULES_API = `${REMOTE_SERVER}/api/modules`

//update
export const updateModule = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module)
    return data
}

//delete
export const deleteModule = async (moduleId: string) => {
    const { data } = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`)
    return data
}

//create
export const createModule = async (courseId: string, module: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module)
    return response.data
}

//get
export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/modules`)
    return response.data
};

import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true })

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
};

export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user)
    return response.data
}


export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`)
    return response.data
}

export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`)
    return response.data
}

export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`)
    return data
}

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course)
    return data
}

export const findAllUsers = async () => {
    const { data } = await axios.get(USERS_API)
    return data
}

export const findUsersByRole = async (role: string) => {
    const { data } = await axios.get(`${USERS_API}?role=${role}`)
    return data
}

export const findUsersByPartialName = async (name: string) => {
    const { data } = await axios.get(`${USERS_API}?name=${name}`)
    return data
}

export const findUserById = async (id: string) => {
    const { data } = await axios.get(`${USERS_API}/${id}`)
    return data
}

export const deleteUser = async (id: string) => {
    const { data } = await axios.delete(`${USERS_API}/${id}`)
    return data
}

export const updateUser = async (user: any) => {
    const { data } = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user)
    return data
}

export const createUser = async (user: any) => {
    const { data } = await axios.post(`${USERS_API}`, user)
    return data
}

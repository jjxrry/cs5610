import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/courses`;

// Get all quizzes
export const fetchAllQuizzes = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}/${courseId}/quizzes`);
    return response.data;
};

// Get all published quizzes
export const fetchAllPublishedQuizzes = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}/${courseId}/quizzes/`);
    return response.data;
};

// Delete a quiz
export const deleteQuiz = async (courseId: string, quizId: string) => {
    const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${courseId}/quizzes/${quizId}`);
    return response.data;
};

// Update a quiz
export const updateQuiz = async (courseId: string, quizId: string, quiz: any) => {
    const response = await axiosWithCredentials.put(`${QUIZZES_API}/${courseId}/quizzes/${quizId}`, quiz);
    return response.data;
};

// Create a new quiz
export const createQuiz = async (courseId: string, quiz: any) => {
    const response = await axiosWithCredentials.post(`${QUIZZES_API}/${courseId}/quizzes`, quiz);
    return response.data;
};

// Fetch quiz by ID
export const fetchQuizById = async (courseId: string, quizId: string) => {
    const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${courseId}/quizzes/${quizId}`);
    return data;
};

// Publish a quiz
export const publishQuiz = async (courseId: string, quizId: string) => {
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${courseId}/quizzes/${quizId}/publish`);
    return data;
};

export const unpublishQuiz = async (courseId: string, quizId: string) => {
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${courseId}/quizzes/${quizId}/unpublish`);
    return data;
};

export const getAttempt = async (courseId: string, quizId: string, attemptId: string) => {
    const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${courseId}/quizzes/${quizId}/${attemptId}`)
    return data
}

export const createAttempt = async (courseId: string, quizId: string, attempt: any) => {
    console.log(`${QUIZZES_API}/${courseId}/quizzes/${quizId}/attempts `)
    console.log("ATTEMPT POST")
    const { data } = await axiosWithCredentials.post(`${QUIZZES_API}/${courseId}/quizzes/${quizId}/attempts`, attempt)
    console.log("DATA POST: ", data)
    return data
}

export const updateAttempt = async (courseId: string, quizId: string, attemptId: string) => {
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${courseId}/quizzes/${quizId}/${attemptId}`)
    return data
}

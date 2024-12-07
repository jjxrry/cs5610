import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../database";

const initialState = {
    enrollments: enrollments
};
const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollCourse: (state, { payload }) => {
            state.enrollments.push(payload)
        },
        unenrollCourse: (state, { payload }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) => enrollment.user !== payload.user || enrollment.course !== payload.course
            )
        },
    }
});
export const { enrollCourse, unenrollCourse } =
    enrollmentSlice.actions
export const enrollmentReducer = enrollmentSlice.reducer

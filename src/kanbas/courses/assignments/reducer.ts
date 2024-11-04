import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availableFrom: assignment.availableFrom,
                availableUntil: assignment.availableUntil,
                submissionType: assignment.submissionType,
                displayGradeAs: assignment.displayGradeAs,
                assignmentGroup: assignment.assignmentGroup,
                mediaOptions: {
                    textEntry: assignment.mediaOptions.textEntry,
                    websiteUrl: assignment.mediaOptions.websiteUrl,
                    mediaRecordings: assignment.mediaOptions.mediaRecordings,
                    studentAnnotation: assignment.mediaOptions.studentAnnotation,
                    fileUpload: assignment.mediaOptions.fileUpload
                }
            }
            state.assignments = [...state.assignments, newAssignment] as any
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: updatedAssignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === updatedAssignment._id ? updatedAssignment : a
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
    assignmentsSlice.actions;
export const assignmentsReducer = assignmentsSlice.reducer;

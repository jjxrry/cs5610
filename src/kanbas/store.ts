import { configureStore } from "@reduxjs/toolkit";
import { modulesReducer } from "./courses/modules/reducer";
import { accountReducer } from "./account/reducer";
import { assignmentsReducer } from "./courses/assignments/reducer";
import { enrollmentReducer } from "./courses/enrollments/reducer";

export const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentsReducer,
        enrollmentReducer,
    },
})

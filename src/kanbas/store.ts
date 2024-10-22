import { configureStore } from "@reduxjs/toolkit";
import { modulesReducer } from "./courses/modules/reducer";
export const store = configureStore({
    reducer: {
        modulesReducer,
    },
});

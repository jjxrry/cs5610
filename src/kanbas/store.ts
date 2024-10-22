import { configureStore } from "@reduxjs/toolkit";
import { modulesReducer } from "./courses/modules/reducer";
import { accountReducer } from "./account/reducer";

export const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
    },
});

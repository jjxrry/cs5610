import { configureStore } from "@reduxjs/toolkit";
import { helloReducer } from "../lab4/ReduxExamples/HelloRedux/helloReducer"
import { counterReducer } from "../lab4/ReduxExamples/CounterRedux/counterReducer"
import { addReducer } from "../lab4/ReduxExamples/AddRedux/addReducer";

export const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
    },
});

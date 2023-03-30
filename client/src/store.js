import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./reducers/customReducer";


const store = configureStore({
    reducer: {
        custom: customReducer,
    }
});

export default store;
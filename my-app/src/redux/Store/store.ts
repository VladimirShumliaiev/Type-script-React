import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import examplesSlice from "../Slices/examplesSlice";
import lessonsObjectSlice from "../Slices/lessonsObjectSlice";
import userSlice from "../Slices/userSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        examples: examplesSlice,
        usersObject: lessonsObjectSlice,
        userSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
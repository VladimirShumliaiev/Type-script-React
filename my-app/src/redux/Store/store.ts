import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import todoLessonsSlice from "../Slices/todoLessonsSlice";
import examplesSlice from "../Slices/examplesSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        todoLessons: todoLessonsSlice,
        examples: examplesSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
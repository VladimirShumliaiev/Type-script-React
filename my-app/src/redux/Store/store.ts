import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import todoLessonsSlice from "../Slices/todoLessonsSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        todoLessons: todoLessonsSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
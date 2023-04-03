import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import examplesSlice from "../Slices/examplesSlice";
import lessonsObjectTodoSlice from "../Slices/lessonsObjectTodoSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        lessonsObject: lessonsObjectTodoSlice,
        examples: examplesSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
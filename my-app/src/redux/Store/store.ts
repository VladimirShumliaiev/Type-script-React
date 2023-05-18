import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import examplesSlice from "../Slices/examplesSlice";
import lessonsObjectSlice from "../Slices/lessonsObjectSlice";
import userSlice from "../Slices/userSlice";
import photosSlice from "../Slices/photosSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        examples: examplesSlice,
        usersObject: lessonsObjectSlice,
        userSlice,
        photos: photosSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type todoLessons = {
    id: string
    title: string
    completed: boolean
}

type todoLessonsState = {
    todo: todoLessons[]
}

const initialState: todoLessonsState = {
    todo: []

}

const todoLessonsSlice = createSlice({
    name: 'todoLessonsSlice',
   initialState,
    reducers: {
       addTodo(state, action: PayloadAction<string>) {
           state.todo.push({
               id: new Date().toISOString(),
               title: action.payload,
               completed: false,
           })
       },
        removeTodo(state, action: PayloadAction<string>){
           state.todo = state.todo.filter(e => e.id !== action.payload)
        },
        completedTodo(state, action: PayloadAction<string>) {
           const toggle = state.todo.find(e => e.id === action.payload)
            if (toggle) {
                toggle.completed = !toggle.completed
            }
        }
    }
})

export const {addTodo, removeTodo, completedTodo} = todoLessonsSlice.actions
export default todoLessonsSlice.reducer
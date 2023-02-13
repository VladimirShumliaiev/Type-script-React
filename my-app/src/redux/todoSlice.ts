
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    id: string,
    title: string,
    completed: boolean,
}
type TodosState = {
    list: Todo[];
}

const initialState: TodosState = {
    list: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },
        statusTodos(state, action: PayloadAction<string>) {
            const toggle = state.list.find(e => e.id === action.payload)
            if(toggle) {
                toggle.completed = !toggle.completed
            }
        },
        canselTodos(state, action: PayloadAction<string>) {
            state.list = state.list.filter(e => e.id !== action.payload)
        },
    }
})
export const {addTodos, statusTodos, canselTodos} = todoSlice.actions
export default todoSlice.reducer



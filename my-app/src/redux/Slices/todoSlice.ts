import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type Todo = {
    id: string
    title: string
    completed: boolean
}

type TodoState = {
    todoList: Todo[]
    pending: boolean
    error: null | string
}

const initialState: TodoState = {
    todoList: [],
    pending: false,
    error: null
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'Todo/fetchTodo',
    async (_, {rejectWithValue}) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=15')

        if (!response) {
            return rejectWithValue('Error fetch todo')
        }
        return await response.data
    }
)

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
    'Todo/addTodo',
    async (title, {rejectWithValue}) => {
        const todo = {
            id: 2,
            title: title,
            completed: false
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            return rejectWithValue('Error add todo')
        }
        return await response.json() as Todo
    }
)


export const toggleTodo = createAsyncThunk<Todo, string, { rejectValue: string, state: { todo: TodoState } }>(
    'Todo/toggleTodo',
    async (id, {rejectWithValue, getState}) => {
        const toggle = getState().todo.todoList.find(e => e.id === id)

        if (toggle) {
            const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    completed: !toggle.completed
                })
            })

            if (!response) {
                return rejectWithValue('Error toggle todo')
            }
            return await response.data as Todo
        }
        return rejectWithValue('General error in the switch')
    }
)

export const removeTodo = createAsyncThunk<string, string, { rejectValue: string }>(
    'Todo/removeTodo',
    async (id, {rejectWithValue}) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        })
        if (!response) {
            return rejectWithValue('Error remove todo')
        }
        return id
    }
)

const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTask(state, action){
            state.todoList.push(action.payload)
        },
        removeTask(state, action){
            state.todoList = state.todoList.filter(e => e.id !== action.payload)
        },
        toggleTask(state, action){
            const toggle = state.todoList.find(e => e.id === action.payload)
            if (toggle)
            toggle.completed = !toggle.completed
        },

    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.todoList = action.payload
                state.pending = false
            })
            .addCase(addTodo.pending, (state) => {
                state.error = null
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todoList.push(action.payload)
                state.error = null
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const toggle = state.todoList.find(e => e.id === action.payload.id)
                if (toggle) {
                    toggle.completed = !toggle.completed
                }
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.todoList = state.todoList.filter(e => e.id !== action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.pending = false
            })

})

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}
// export  const {addTask, removeTask, toggleTask} = todoSlice.actions
export default todoSlice.reducer

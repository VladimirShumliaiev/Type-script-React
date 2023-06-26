import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type Todo = {
    id: string
    userId: number
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
    error: null,
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'Todos/fetchTodo',
    async (_,{rejectWithValue}) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

        if (!response) {
            return rejectWithValue('Error fetch todo')
        }
        return await response.data
    }
)

export const addTodo = createAsyncThunk<Todo, string, {rejectValue: string}>(
    'Todos/addTodo',
    async (title,{rejectWithValue}) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            id: 1,
            title: title,
            completed: false
        })

        if (!response) {
            return rejectWithValue('Error add Todo')
        }

        return await response.data as Todo
    }
)

export const toggleTodo = createAsyncThunk<Todo, string, {rejectValue: string, state: {todo: TodoState}}>(
    'Todos/toggleTodo',
    async (id, {getState, rejectWithValue}) => {
        const todo = getState().todo.todoList.find(e => e.id === id)

        if (todo) {
            const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`)

            if (!response) {
                return rejectWithValue('Error toggle todo')
            }
            return await response.data as Todo
        }
        return rejectWithValue('ERROR')
    }
)

export const removeTodo = createAsyncThunk<string, string, {rejectValue: string}>(
    'Todos/removeTodo',
    async (id,{rejectWithValue}) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        if (!response) {
            return rejectWithValue('Error remove Todo')
        }
        return id
    }
)


const todoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers:{},

    extraReducers: builder =>
        builder
            .addCase(fetchTodo.pending, state => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.todoList = action.payload
                state.pending = false
            })
            .addCase(addTodo.pending, state => {
                state.pending = true
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todoList.push(action.payload)
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
export default todoSlice.reducer




















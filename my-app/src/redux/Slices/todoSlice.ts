import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type Todo = {
    id: string
    title: string
    completed: boolean
}

type TodoState = {
    list: Todo[]
    error: string | null
    pending: boolean
}

const initialState: TodoState = {
    list: [],
    error: null,
    pending: false,
}

export const fetchTodo = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'Todo/fetchTodo',
    async (_,{rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)

        if (!response.ok) {
            return rejectWithValue('Error fetch todo')
        }
        return await response.json()
    }
)

export const addTodo = createAsyncThunk<Todo, string, {rejectValue: string}>(
    'Todo/addTodo',
    async (title,{rejectWithValue}) => {
        const todo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
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

export const toggleTodo = createAsyncThunk<Todo, string, {rejectValue: string, state: {todo: TodoState}}>(
    'Todo/toggleTodo',
    async (id, {rejectWithValue, getState}) => {
        const todo = getState().todo.list.find(e => e.id === id)

        if (todo) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })
            if (!response.ok) {
                return rejectWithValue('Error toggle todo')
            }
            return await response.json() as Todo
        }
        return rejectWithValue('Error toggle All')
    }
)

export const removeTodo = createAsyncThunk<string, string, {rejectValue: string}>(
    'Todo/removeTodo',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            return rejectWithValue('Error delete todo')
        }
        return id
    }
)

const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.list = action.payload
                state.pending = false

            })
            .addCase(addTodo.pending, (state) => {
                state.error = null
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.list.push(action.payload)
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const toggle = state.list.find(e => e.id === action.payload.id)
                if (toggle) {
                    toggle.completed = !toggle.completed
                }
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.list = state.list.filter(e => e.id !== action.payload)
            })
    }

})


export default todoSlice.reducer
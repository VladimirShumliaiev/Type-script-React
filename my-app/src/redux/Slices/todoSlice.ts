import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type Todo = {
    id: string
    title: string
    completed: boolean
}

type TodoState = {
    list: Todo[]
    pending: boolean
    error: string | null
}

const initialState: TodoState = {
    list: [],
    pending: false,
    error: null

}

export const fetchTodo = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'Todo/fetchTodo',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')

        if (!response.ok) {
            return rejectWithValue('Error fetch Todo')
        }
        return await response.json()
    }
)

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
    'Todo/addTodo',
    async (title, {rejectWithValue}) => {
        const todo = {
            userId: '1',
            id: '1',
            title: title,
            completed: false
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'Post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            return rejectWithValue('Error add Todo')
        }
        return await response.json() as Todo
    }
)

export const toggleTodo = createAsyncThunk<Todo, string, { rejectValue: string, state: { todo: TodoState } }>(
    'toggleTodo/Todo',
    async (id, {rejectWithValue, getState}) => {
        const todo = getState().todo.list.find(e => e.id === id)

        if (todo) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })
            if (!response.ok) {
                return rejectWithValue('Error toggle todo')
            }
            return (await response.json()) as Todo
        }
        return rejectWithValue('no such todo in the list')

    }
)

export const removeTodo = createAsyncThunk<string, string, {rejectValue: string}>(
    'removeTodo/Todo',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('error delete todo')
        }
        return id
    }
)

const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
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
})

export default TodoSlice.reducer
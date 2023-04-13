import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    title: string,
    id: string,
    completed: boolean
}

type TodoState = {
    list: Todo[],
    loading: boolean,
    error: string | null
}

export const fetchTodoObject = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'Todo/fetchTodoObject',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')

        if (!response.ok) {
            return rejectWithValue('error fetch')
        }

        return await response.json()
    }
)

export const addTodoFetch = createAsyncThunk<Todo, string, { rejectValue: string }>(
    'Todo/addTodoFetch',
    async (title, {rejectWithValue}) => {
        const todo = {
            id: 1,
            title: title,
            completed: false
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            return rejectWithValue('error add todo ')
        }

        return (await response.json()) as Todo
    }
)

export const toggleTodo = createAsyncThunk<Todo, string, { rejectValue: string, state: { todo: TodoState } }>(
    'Todo/toggleTodo',
    async (id, {rejectWithValue, getState}) => {
        const todoToggle = getState().todo.list.find(e => e.id === id)
        if (todoToggle) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todoToggle.completed
                })

            })
            if (!response.ok) {
                return rejectWithValue('error toggle todo')
            }
            return (await response.json()) as Todo
        }
        return rejectWithValue('no such todo in the list')
    }
)

export const deleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
    'Todo/deleteTodo',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('error delete')
        }
        return id
    }
)

const initialState: TodoState = {
    list: [],
    loading: false,
    error: null,
}

const lessonsObjectSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoObject.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodoObject.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
            .addCase(addTodoFetch.pending, (state) => {
                state.error = null
            })
            .addCase(addTodoFetch.fulfilled, (state, action) => {
                state.list.push(action.payload)
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const toggle = state.list.find(e => e.id === action.payload.id)
                if (toggle) {
                    toggle.completed = !toggle.completed
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.list = state.list.filter(e => e.id !== action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })
    }

})

export default lessonsObjectSlice.reducer

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}
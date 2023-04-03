import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


type Todo = {
    id: string,
    title: string,
    completed: boolean
}

type TodoProps = {
    todo: Todo[],
    pending: boolean,
    error: null | string,
}

export const fetchTodoLessons = createAsyncThunk<Todo[], undefined,{rejectValue: string}>(
    'todoLessons/fetchTodoLessons',
    async (_,{rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
        if (!response.ok) {
            return rejectWithValue('error fetchTodo')
        }
        return await response.json()
    }
)

export const addTodoLessons = createAsyncThunk<Todo, string, {rejectValue: string}>(
    'todoLessons/addTodoLessons',
    async (title, {rejectWithValue, dispatch}) => {
        const todo = {
            id: 1,
            title: title,
            completed: false,
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            return rejectWithValue('addFetch error')
        }

        return (await response.json()) as Todo
    }
)

const initialState: TodoProps = {
    todo: [],
    pending: false,
    error: null,
}

const lessonsObjectTodoSlice = createSlice({
    name: 'todoLessons',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoLessons.pending, (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchTodoLessons.fulfilled, (state, action) => {
                state.todo = action.payload
                state.pending = false
            })
            .addCase(addTodoLessons.pending, (state) => {
                state.error = null
            })
            .addCase(addTodoLessons.fulfilled, (state, action) => {
                state.todo.push(action.payload)
            })
    }

})

export default lessonsObjectTodoSlice.reducer
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type Todo = {
    title: string,
    id: string,
    completed: boolean
}

type TodoState = {
    todo: Todo[],
    loading: boolean,
    error: null | string
}

export const fetchTodoObject = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'Todo/fetchTodoObject',
    async (_,{rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=25')

        if (!response.ok) {
            return rejectWithValue('error fetch')
        }

        return response.json()
    }
)

const initialState: TodoState =  {
    todo: [],
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
                state.todo = action.payload
                state.loading = false
            })
    }

})

export default lessonsObjectSlice.reducer
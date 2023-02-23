import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    id: string,
    title: string,
    completed: boolean,
}

type TodoState = {
    todo: Todo[]
    error: string | null
    status: boolean
}

export const fetchTodoLessons = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'todoLessons/fetchTodoLessons',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=20')

        if (!response.ok) {
            return rejectWithValue('Error fetchTodo Lessons')
        }

        return await response.json()
    }
)


const initialState: TodoState = {
    todo: [{title: 'Todo', id: '1', completed: true}, {title: 'Todo2', id: '2', completed: false}],
    error: null,
    status: false
}

const todoLessonsSlice = createSlice({
    name: 'todoLessons',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todo.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todo = state.todo.filter(e => e.id !== action.payload)
        },
        completedTodo(state, action: PayloadAction<string>) {
            const complete = state.todo.find(e => e.id === action.payload)
            if (complete) {
                complete.completed = !complete.completed
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoLessons.pending, (state) => {
                state.status = true
                state.error = null
            })
            .addCase(fetchTodoLessons.fulfilled, (state, action) => {
                state.todo = action.payload
                state.status = false
            })
    }
})

export const {addTodo, removeTodo, completedTodo} = todoLessonsSlice.actions
export default todoLessonsSlice.reducer
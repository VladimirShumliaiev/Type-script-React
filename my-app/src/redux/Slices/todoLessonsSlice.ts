import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')

        if (!response.ok) {
            return rejectWithValue('Error fetchTodo Lessons')
        }

        return await response.json()
    }
)

export const addFetchTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
    'todoLessons/addFetchTodo',
    async (title,{rejectWithValue}) => {
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
            return rejectWithValue('Error Add Todo')
        }

        return( await response.json()) as Todo
    }

)

export const removeTodoLessons = createAsyncThunk<string, string, { rejectValue: string }>(
    'todoLessons/removeTodoLessons',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('error remove todo lessons')
        }
        return id
    }
)

export const fetchCompleteTodoLessons = createAsyncThunk<Todo, string, {rejectValue: string, state: { todoLessons: TodoState }}>(
    'todoLessons/fetchCompleteTodoLessons',
    async (id, {rejectWithValue, getState}) => {
        const todo = getState().todoLessons.todo.find(e => e.id === id)
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

            if(!response.ok) {
                return rejectWithValue('error toggle todo')
            }
            return (await response.json()) as Todo
        }
        return rejectWithValue('no such todo in the list ')
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
            .addCase(addFetchTodo.pending, (state) => {
                state.error = null
            })
            .addCase(addFetchTodo.fulfilled, (state, action) => {
                state.todo.push(action.payload)
            })
            .addCase(removeTodoLessons.fulfilled, (state, action) => {
                state.todo = state.todo.filter(e => e.id !== action.payload)
            })
            .addCase(fetchCompleteTodoLessons.fulfilled, (state, action) => {
                const toggle = state.todo.find(e => e.id === action.payload.id)
                if (toggle) {
                    toggle.completed = !toggle.completed
                }
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.status = false
            })
    }
})
const {addTodo, removeTodo, completedTodo} = todoLessonsSlice.actions
export default todoLessonsSlice.reducer

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

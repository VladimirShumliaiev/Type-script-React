import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    id: string,
    title: string,
    completed: boolean,
}
type TodosState = {
    list: Todo[];
    loading: boolean;
    error: string | null;
}

// const createAppAsyncThunk = createAsyncThunk.withTypes<{
//     state: RootState
//     dispatch: AppDispatch
//     rejectValue: string
//     extra: { s: string; n: number }
// }>()

export const fetchTodo = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
    'todo/fetchTodo',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')

        if (!response.ok) {
            return rejectWithValue('Error fetch')
        }

        return await response.json()
    }
)

export const fetchAddTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
    'todo/fetchAddTodo',
    async (title, {rejectWithValue}) => {
        const todo = {
            id: 1,
            completed: false,
            title: title,
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            return rejectWithValue('Error fetchAddTodo')
        }

        return (await response.json()) as Todo
    }
)

export const fetchToggleTodo = createAsyncThunk<Todo, string, { rejectValue: string, state: { todo: TodosState } }>(
    'todo/fetchToggleTodo',
    async (id, {rejectWithValue, getState}) => {
        const todo = getState().todo.list.find(e => e.id === id)
        if (todo) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })

            if (!response.ok) {
                return rejectWithValue('Error toggle')
            }
            return (await response.json()) as Todo
        }
        return rejectWithValue('no such todo in the list ')
    }
)

export const fetchDeleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
    'todo/fetchDeleteTodo',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('error delete todo')
        }
        return id;
    }
)


const initialState: TodosState = {
    list: [],
    loading: false,
    error: null,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //     addTodos(state, action: PayloadAction<string>) {
        //         state.list.push({
        //             id: new Date().toISOString(),
        //             title: action.payload,
        //             completed: false,
        //         })
        //     },
        //     statusTodos(state, action: PayloadAction<string>) {
        //         const toggle = state.list.find(e => e.id === action.payload)
        //         if (toggle) {
        //             toggle.completed = !toggle.completed
        //         }
        //     },
        //     canselTodos(state, action: PayloadAction<string>) {
        //         state.list = state.list.filter(e => e.id !== action.payload)
        //     },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
            .addCase(fetchAddTodo.pending, (state) => {
                state.error = null
            })
            .addCase(fetchAddTodo.fulfilled, (state, action) => {
                state.list.push(action.payload)
            })
            .addCase(fetchToggleTodo.fulfilled, (state, action) => {
                const toggle = state.list.find(e => e.id === action.payload.id)
                if (toggle) {
                    toggle.completed = !toggle.completed
                }
            })
            .addCase(fetchDeleteTodo.fulfilled, (state, action) => {
                state.list = state.list.filter(e => e.id !== action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })


    }
})

export default todoSlice.reducer

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}



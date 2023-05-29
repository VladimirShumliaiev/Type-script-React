import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import TypeUsers from "../../types/typeUsers";

type Users = TypeUsers

type UsersState = {
    userList: Users[]
    error: string | null
    pending: boolean
}

const initialState: UsersState = {
    userList: [],
    error: null,
    pending: false
}

export const fetchUsers = createAsyncThunk<Users[], undefined, {rejectValue: string}>(
    'Users/fetchUsers',
    async (_,{rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            return rejectWithValue('Error fetch users!!!')
        }
        return await response.json()
    }
)

export const removeUser = createAsyncThunk<string, string, {rejectValue: string}>(
    'Users/removeUser',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('Error remove todo!!!')
        }
        return id
    }
)

const userSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.userList = action.payload
                state.pending = false
            })
            .addCase(removeUser.fulfilled, (state, action) => {
                if (window.confirm('delete todo?')) {
                    state.userList = state.userList.filter(e => e.id !== action.payload)
                }
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.pending = false

            })
    }
})

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

export default userSlice.reducer

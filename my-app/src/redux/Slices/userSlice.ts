import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type Users = {
    id: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            ing: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

type UserState = {
    users: Users[]
    error: string | null
    pending: boolean
}

const initialState: UserState = {
    users: [],
    error: null,
    pending: false,
}

export const fetchUsersExample = createAsyncThunk<Users[], undefined, { rejectValue: string }>(
    'Users/fetchUsers',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            return rejectWithValue('error fetch users')
        }
        return await response.json()
    }
)

export const deleteUserExample = createAsyncThunk<string, string, { rejectValue: string }>(
    'Users/deleteUser',
    async (id, {rejectWithValue}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('Error Delete User')
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
            .addCase(fetchUsersExample.pending , (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchUsersExample.fulfilled, (state, action) => {
                state.users = action.payload
                state.pending = false
            })
            .addCase(deleteUserExample.fulfilled, (state, action) => {
               state.users = state.users.filter(e => e.id !== action.payload)
            })

    }
})

export default userSlice.reducer

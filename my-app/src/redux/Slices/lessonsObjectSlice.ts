import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type Users = {
    id: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

type UsersState = {
    users: Users[],
    pending: boolean,
    error: string | null

}

const initialState: UsersState = {
    users: [],
    pending: false,
    error: null,
}

export const fetchUsers = createAsyncThunk<Users[], undefined, {rejectValue: string}>(
    'Users/fetchUsers',
    async (_, {rejectWithValue}) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        if(!response) {
            return rejectWithValue('Error fetch users')
        }
        return await response.data
    }
)

export const deleteUser = createAsyncThunk<string, string, {rejectValue: string}>(
    'Users/deleteUser',
    async (id, {rejectWithValue}) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response) {
            return rejectWithValue('Error delete')
        }
        return id
    }
)

const lessonsObjectSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchUsers.pending, (state) => {
            state.pending = true
            state.error = null
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.pending = false
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.users = state.users.filter(e => e.id !== action.payload)
        })
        .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.pending = false
        })
    }
})


export default lessonsObjectSlice.reducer;

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}
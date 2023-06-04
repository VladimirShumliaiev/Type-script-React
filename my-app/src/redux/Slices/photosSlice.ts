import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type Photos = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

type PhotosState = {
    photosList: Photos[]
    pending: boolean
    error: string | null
}

const initialState: PhotosState = {
    photosList: [],
    pending: false,
    error: null,
}

export const fetchPhotos = createAsyncThunk<Photos[], undefined, { rejectValue: string }>(
    'Photos/fetchPhotos',
    async (_, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=100')

        if (!response.ok) {
            return rejectWithValue('Error fetch Photos')
        }
        return await response.json()
    }
)


const photosSlice = createSlice({
    name: 'Photos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.pending = true
                state.error = null
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.photosList = action.payload
            })
    }

})

export default photosSlice.reducer
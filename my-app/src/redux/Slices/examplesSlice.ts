import {createSlice} from "@reduxjs/toolkit";

type Examples = {
    id: string
    title: string
}

type ExampleState = {
    examples: Examples[]
}

const initialState: ExampleState = {
    examples: [{id: '1', title: 'Hello world'}]
}

const examplesSlice = createSlice({
    name: 'examples',
    initialState,
    reducers: {
        addTitle(state, action) {
            state.examples.push({
                id: new Date().toISOString(),
                title: action.payload
            })
        },
        deleteTitle(state, action) {
            state.examples = state.examples.filter(e => e.id !== action.payload.id)
        }
    }
})

export const {addTitle, deleteTitle} = examplesSlice.actions
export default examplesSlice.reducer
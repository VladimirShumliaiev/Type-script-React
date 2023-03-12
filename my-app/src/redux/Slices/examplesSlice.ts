import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        addTitle(state, action: PayloadAction<string>) {
            state.examples.push({
                id: new Date().toISOString(),
                title: action.payload
            })
        },
        deleteTitle(state, action: PayloadAction<string>) {
            state.examples = state.examples.filter(e => e.id !== action.payload)
        }
    }
})

export const {addTitle, deleteTitle} = examplesSlice.actions
export default examplesSlice.reducer
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Examples = {
    id: string
    title: string
    completed: boolean
}

type ExampleState = {
    examples: Examples[]
}

const initialState: ExampleState = {
    examples: [{id: '1', title: 'Hello world',completed: true}]
}

const examplesSlice = createSlice({
    name: 'examples',
    initialState,
    reducers: {
        addTitle(state, action: PayloadAction<string>) {
            state.examples.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },
        deleteTitle(state, action: PayloadAction<string>) {
            state.examples = state.examples.filter(e => e.id !== action.payload)
        },
        toggleTitle(state, action: PayloadAction<string>) {
            const toggle = state.examples.find(e => e.id === action.payload)
            if (toggle) {
                toggle.completed = !toggle.completed
            }
        }
    }
})

export const {addTitle, deleteTitle, toggleTitle} = examplesSlice.actions
export default examplesSlice.reducer
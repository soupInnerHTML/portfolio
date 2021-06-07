import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFromServer } from '../../utils/fetch';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

const initialState:IState = {
    worksList: [],
}

export const fetchWorks = createAsyncThunk(
    'works/fetchWorks',
    async () => {
        const data: IWork[] = await getFromServer('works')
        return data.map((work, id) => ({ ...work, id, }))
    }
)

export const workSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchWorks.fulfilled as any]: (state, action) => {
            state.worksList = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
// export const { setWorks } = workSlice.actions

export default workSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFromServer } from '../../utils/fetch';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

const initialState:ICredentials = {
    github: {
        profileLink: '',
        profileName: '',
    },
    gmail: '',
    telegram: '',
}

export const fetchCredentials = createAsyncThunk<ICredentials>(
    'credentials/fetchCredentials',
    async () => {
        const data: ICredentials = await getFromServer('credentials')
        return data
    }
)

export const credentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {},
    extraReducers: ({ addCase, }) => {
        addCase(fetchCredentials.fulfilled, (state, { payload, }) => {
            for (let key in state) {
                if (state.hasOwnProperty(key) && payload.hasOwnProperty(key)) {
                    // @ts-ignore
                    state[key as ECredentials] = (payload as ICredentials)[key as ECredentials]
                }
            }
        })
    },
})

// Action creators are generated for each case reducer function
// export const { setWorks } = workSlice.actions

export default credentialsSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthResponseType } from '../../types'

// const [user, setUser] = useState();
const initialState = {
	user: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setLogInState: (
			state: { user: AuthResponseType | null },
			action: PayloadAction<AuthResponseType>,
		) => {
			// setUser(action.payload);
			state.user = action.payload
		},

		setLogOutState: (
			state: { user: AuthResponseType | null },
			action: PayloadAction,
		) => {
			// setUser(null);
			state.user = null
		},
	},
})

export const { setLogInState, setLogOutState } = userSlice.actions

export const selectUser = (state: {
	user: { user: AuthResponseType | null }
}) => state.user.user

export default userSlice.reducer

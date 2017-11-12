// @flow

// actions
const TOAST = "toast/toast"
const CLEAR = "toast/clear"

type Action = {
	type: string,
	message?: string,
	kind?: string
}

// sate
type State = {
	hasMessage: boolean,
	kind?: string,
	message?: string
}
const initState = {hasMessage: false}

export default (state: State = initState, action: Action = {type: "init"}): State => {
	const {type, message, kind} = action
	switch (type) {
		case TOAST:
			return {hasMessage: true, message, kind}
		case CLEAR:
			return {hasMessage: false}
		default:
			return state
	}
}

// actions creators
export const clear = () => ({type: CLEAR})
export const toast = (message: string, kind:string='info') => (dispatch:(Action)=>void) => {
	dispatch({type: TOAST, message, kind})
	setTimeout(()=>dispatch(clear()), 5000)
}

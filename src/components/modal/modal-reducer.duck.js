// @flow

// actions
const OPEN = 'modal/open'
const CLOSE = 'modal/close'
const SPINNING = 'modal/spinning'
const SPINNING_OFF = 'modal/spinning-off'

type DialogProps = {[id:string]: mixed}
type Action = {
	type: string,
	dialogName?: string,
	dialogProps?: DialogProps,
}

// state 
type State = {
	opened: boolean,
	dialogName?: string,
	dialogProps?: DialogProps,
	spinning: boolean
}
const initState: State = {
	opened: false,
	spinning: false
}

// reducer
export default (state: State = initState, action: Action = {type: CLOSE}): State => {
	const {type, dialogName, dialogProps} = action
	switch (type) {
		case OPEN:
			return {...initState, opened: true, dialogName, dialogProps}
		case CLOSE:
			return {...initState, opened: false}
		case SPINNING:
			return {...state, spinning: true}
		case SPINNING_OFF:
			return {...state, spinning: false}
		default:
			return state
	}
}

// action creators
export const openModal = (dialogName: string, dialogProps: DialogProps): Action => ({
	type: OPEN,
	dialogName,
	dialogProps
})
export const closeModal = (): Action => ({type: CLOSE})
export const setModalSpinning = ():Action => ({type: SPINNING})
export const setModalSpinningOff = ():Action => ({type: SPINNING_OFF})

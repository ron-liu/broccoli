// @flow

// actions
const OPEN = 'modal/open'
const CLOSE = 'modal/close'

type DialogProps = {[id:string]: mixed}
type Action = {
	type: string,
	dialogName?: string,
	dialogProps?: DialogProps
}

// state 
type State = {
	opened: boolean,
	dialogName?: string,
	dialogProps?: DialogProps
}
const initState: State = {
	opened: false
}

export default (state: State = initState, action: Action = {type: CLOSE}): State => {
	const {type, dialogName, dialogProps} = action
	switch (type) {
		case OPEN:
			return {opened: true, dialogName, dialogProps}
		case CLOSE:
			return {opened: false}
		default:
			return state
	}
}

export const openModal = (dialogName: string, dialogProps: DialogProps): Action => ({
	type: OPEN,
	dialogName,
	dialogProps
})

export const closeModal = (): Action => ({type: CLOSE})

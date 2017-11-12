// @flow

import {connect} from 'react-redux'
import {
	closeModal, openModal, setModalSpinning,
	setModalSpinningOff
} from '../components/modal/modal-reducer.duck'
import {clear, toast} from "../components/toast/toast-reducer.duck";

export const withModal = connect(
	store => ({modalState: store.modal}),
	dispatch => ({
		closeModal: () => dispatch(closeModal()),
		openModal: (name, props) => dispatch(openModal(name, props)),
		setModalSpinning: () => dispatch(setModalSpinning()),
		setModalSpinningOff: () => dispatch(setModalSpinningOff()),
	})
)

export const withToast = connect(
	store => ({toastState: store.toast}),
	dispatch => ({
		toast: (message, kind) => dispatch(toast(message, kind)),
		clearToast: ()=> dispatch(clear())
	})
)


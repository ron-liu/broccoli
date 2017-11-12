// @flow

import {connect} from 'react-redux'
import {closeModal, openModal} from '../components/modal/modal-reducer.duck'

export const withCloseModal = connect(
	null,
	dispatch => ({close: () => dispatch(closeModal())})
)

export const withOpenModal = connect(
	null,
	dispatch => ({open: (name, props) => dispatch(openModal(name, props))})
)


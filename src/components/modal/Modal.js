// @flow

import React from 'react'
import styled from 'styled-components'
import {compose, setPropTypes, defaultProps, branch, renderComponent} from 'recompose'
import PropTypes from 'prop-types'
import InviteDialog from '../InviteDialog'
import MessageDialog from '../MessageDialog'
import { connect } from 'react-redux'
import Overlay from '../Overlay'
import {closeModal} from './modal-reducer.duck'
import ModalOverlay from "./ModalOverlay";

const dialogs = {
	'invite': InviteDialog,
	'message': MessageDialog
}

const Modal = (props) => {
	const {dialogName, dialogProps} = props
	const Dialog = dialogs[dialogName]
	return (
		<ModalOverlay >
			<Dialog {...dialogProps} />
		</ModalOverlay>
	)
}


export default compose(
	connect(
		store => {
			const {modal:{opened, dialogName, dialogProps}} = store
			if (!opened) {
				return {opened}
			}
			const dialog = dialogs[dialogName]
			if(!dialog) {
				console.error(`dialog ${dialogName} is invalid name`)
				return {opened: false}
			}
			return { opened, dialogName, dialogProps}
		}
	),
	branch(
		(props) => !props.opened,
		renderComponent(() => null)
	),
	setPropTypes({
		dialogName: PropTypes.string,
		opened: PropTypes.bool
	}),
	defaultProps({
		opened: false
	})
)(Modal)

// @flow

import React from 'react'
import {setPropTypes, compose} from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './button'
import {withModal} from "../util/index";

const Dialog = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	
`

const MessageDialog = (props) => {
	const {title, message, closeModal} = props
	return (
		<Dialog>
			<h2>{title}</h2>
			<p>{message}</p>
			<Button onClick={closeModal}>OK</Button>
		</Dialog>
	)
}

export default compose(
	withModal,
	setPropTypes({
		title: PropTypes.string,
		message: PropTypes.string
	})
)(MessageDialog)
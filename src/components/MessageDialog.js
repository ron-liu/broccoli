// @flow

import React from 'react'
import {setPropTypes, compose} from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './button'
import {withCloseModal} from "../util/index";

const Dialog = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	
`

const MessageDialog = (props) => {
	const {title, message, close} = props
	return (
		<Dialog>
			<h2>{title}</h2>
			<p>{message}</p>
			<Button onClick={close}>OK</Button>
		</Dialog>
	)
}

export default compose(
	withCloseModal,
	setPropTypes({
		title: PropTypes.string,
		message: PropTypes.string
	})
)(MessageDialog)
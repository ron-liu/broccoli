import React from 'react'
import styled from 'styled-components'
import {withCloseModal} from "../../util/index";

const CornerButton = styled.a`
	color: lightgray;
	&:hover {
		color:darkgray;
	}
	cursor: pointer;
	position: fixed;
	top: 1em;
	right: 1em;
	font-size: 2em;
`

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: white;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	display: flex;
`

const ModalOverlay = (props) => {
	const {close, children} = props
	return (
		<Overlay>
			<CornerButton onClick={close}>X</CornerButton>
			{children}
		</Overlay>
	)
}

export default withCloseModal(ModalOverlay)
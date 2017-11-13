import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, setPropTypes, defaultProps} from 'recompose'
import {withToast} from "../../util/hoc";
import MdClose from 'react-icons/lib/md/close'
import { TransitionGroup } from 'react-transition-group'
import {Fade} from "../../util";

const ToastContainer = compose(
	setPropTypes({
		kind: PropTypes.oneOf(['error', 'info'])
	}),
	defaultProps({kind: 'info'})
)(
	styled.div`
		position: fixed;
		top: 0;
		left: 0;
		background-color: ${({kind})=>kind === 'error'? 'lightpink': 'lightgreen'};
		color: ${({kind})=>kind === 'error'? 'red': 'darkgreen'};
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		opacity: 0.8;
		&:hover {
			opacity: 1;
		}
	`
)


const ConnorButton = compose(
	setPropTypes({
		kind: PropTypes.oneOf(['error', 'info'])
	}),
	defaultProps({kind: 'info'})
)(styled.a`
	position: absolute;
	right: 1em;
	&:hover {
		color: ${({kind})=>kind === 'error'? 'indianred': 'darkseagreen'};
	}
	cursor: pointer;
`)

const ToastMessage = styled.span`
	width: 100%;
	padding: 1em;
`
const Toast = (props) => {
	const {toastState:{message, kind, hasMessage}, clearToast} = props
	return (
		<TransitionGroup>
			{
				hasMessage && (
					<Fade>
						<ToastContainer kind={kind}>
							<ToastMessage >{message}</ToastMessage>
							<ConnorButton kind={kind} onClick={clearToast}><MdClose/></ConnorButton>
						</ToastContainer>
					</Fade>
				)
			}
		
		</TransitionGroup>
	)
}

export default compose(
	withToast
)(Toast)
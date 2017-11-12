import React from 'react'
import styled from 'styled-components'
import {withModal} from '../../util/index';
import MdClose from 'react-icons/lib/md/close'
import Overlay from '../Overlay'
import Spinner from '../Spinner'
import {compose} from 'recompose'

const CornerButton = styled.a`
	color: lightgray;
		&:hover {
			color:darkgray;
		}
	cursor: pointer;
	position: fixed;
	top: 1em;
	right: 1em;
`

const DialogContainer = styled.div`
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
const StyledMdClose = styled(MdClose)`
	width: 3em;
	height: 3em;
`

const SpinnerWithOverlay = () => (
	<Overlay>
		<Spinner color={"white"}/>
	</Overlay>
)

const ModalLayout = (props) => {
	const {closeModal, children, modalState: {spinning}} = props
	return (
		<DialogContainer>
			<CornerButton onClick={closeModal}><StyledMdClose/></CornerButton>
			{children}
			{spinning && <SpinnerWithOverlay/>}
		</DialogContainer>
	)
}

export default compose(
	withModal
)(ModalLayout)
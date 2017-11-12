//@flow

import React from 'react'
import styled from 'styled-components'
import Button from './button'
import {compose} from 'recompose'
import {withModal} from "../util/index";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 60vw;
`

const Title = styled.div`
	font-size: 3em;
`

const SubTitle = styled.div`
	font-size: 1em;
`

const Content = (props) => {
	const {openModal} = props
	return (
		<Wrapper>
			<Title>A better way to enjoy every day</Title>
			<SubTitle>Be the first know when we launch.</SubTitle>
			<Button onClick={()=>openModal('invite')}>Request an invite</Button>
		</Wrapper>
	)
}

export default compose(
	withModal
)(Content)

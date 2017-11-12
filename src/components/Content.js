//@flow

import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import {compose} from 'recompose'
import {withModal, media} from "../util";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	box-sizing: border-box;
	padding: 1rem;
	${media.desktop`width: 60%;`}
	${media.tablet`width: 80%`}
	${media.phone`width: 100%`}
`

const Title = styled.h1`
	font-size: 2.8em;
	color: rgb(47, 48, 51);
	font-weight: 400;
	margin: 0;
`

const SubTitle = styled.h3`
	font-size: 1.5em;
	color: rgb(47, 48, 51);
	font-weight: 400;
	margin: 2rem 0;
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

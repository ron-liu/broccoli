// @flow

import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
    padding: 1rem;
	width: 100%;
    font-size: 1.5rem;
	background-color:deepskyblue;
	color: white;
    position: fixed;
    top:0;
    left:0;
`

export default () => (
	<Header>
		<div>Broccoli & Co.</div>
	</Header>
)
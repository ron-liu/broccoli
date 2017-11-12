// @flow

import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
    padding: 1rem 2rem;
	width: 100%;
    font-size: 1.5rem;
	color: #7a8599;
    position: fixed;
    top:0;
    left:0;
    border-bottom: 1px solid #e6e9f0;
`

export default () => (
	<Header>
		<div>Broccoli & Co.</div>
	</Header>
)
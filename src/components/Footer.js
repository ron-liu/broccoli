// @flow

import React from 'react'
import styled from 'styled-components'
import FaHeart from 'react-icons/lib/fa/heart'

const Footer = styled.div`
	width: 100%;
    position: fixed;
    bottom:0;
    color:#7a8599;
    left:0;
    > p {
        font-size: 0.8rem;
        margin: 0.5rem;
    }
    border-top: 1px solid #e6e9f0;
`
const StyledFaHeart = styled(FaHeart)`
	color: orangered;
	margin: 0 2px;
`

export default () => (
	<Footer>
		<p><span>Made with</span> <StyledFaHeart/> <span>in Melbourne</span></p>
		<p>@ 2017 Broccoli & Co. All rights reserved.</p>
	</Footer>
)

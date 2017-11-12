// @flow

import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
	width: 100%;
    position: fixed;
    background-color: darkgray;
    bottom:0;
    left:0;
    > p {
        font-size: 0.7rem;
    }
`

export default () => (
	<Footer>
		<p>Made with love in Melbourne</p>
		<p>@ 2017 Broccoli & Co. All rights reserved.</p>
	</Footer>
)

// @flow

import React from 'react'
import {compose, setPropTypes, defaultProps} from 'recompose'
import PropTypes from 'prop-types'
import InviteDialog from '../InviteDialog'
import MessageDialog from '../MessageDialog'
import ModalLayout from "./ModalLayout";
import {Fade} from "../../util/transition";
import { TransitionGroup } from 'react-transition-group'
import {withModal} from "../../util/hoc";

const dialogs = {
	'invite': InviteDialog,
	'message': MessageDialog
}

const Modal = (props) => {
	const {modalState: {dialogName, dialogProps, opened}} = props
	const Dialog = dialogs[dialogName]
	return (
		<TransitionGroup>
			{
				opened && (
					<Fade>
						<ModalLayout >
							<Dialog {...dialogProps} />
						</ModalLayout>
					</Fade>
				)
			}
		</TransitionGroup>
	)
}

export default compose(
	withModal,
	setPropTypes({
		dialogName: PropTypes.string,
		opened: PropTypes.bool,
		dialogProps: PropTypes.object
	}),
	defaultProps({
		opened: false
	})
)(Modal)

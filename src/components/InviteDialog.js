// @flow

import React from 'react'
import {setPropTypes, compose, withHandlers, withState} from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './button'
import {withModal} from "../util/index";
import {reduxForm, Field} from 'redux-form'
import FormInput from './FormInput'
import {required} from '../util'
import {requestInvite} from '../util/service'
import {withToast} from "../util/hoc";

const Form = styled.form`
	display: flex;
	flex-direction: column;
`
const InviteDialog = (props) => {
	const {handleSubmit, submitting, save } = props
	
	return (
		<Form onSubmit={handleSubmit(save)}>
			<h2>Request an invite</h2>
			<Field
				name="name" component={FormInput} placeholder="Full Name"
				validate={[required]}
			/>
			<Field name="email" component={FormInput} placeholder="Email" />
			<Field name="confirmedEmail" component={FormInput} placeholder="Confirmed Email" />
			<Button type="submit" disabbled={submitting}>Save</Button>
		</Form>
	)
}

export default compose(
	withModal,
	withToast,
	withHandlers({
		save: props => form => {
			const {setModalError, closeModal, setModalSpinning, toast, setModalSpinningOff} = props
			setModalSpinning()
			return requestInvite(form.name, form.email)
			.then(res => {
				setModalSpinningOff()
				if (res.success) {
					closeModal()
					return toast('All done, saved successfully')
				}
				toast(res.message, 'error')
			})
		}
	}),
	setPropTypes({
		title: PropTypes.string,
		message: PropTypes.string
	}),
	reduxForm({ form: 'invite' })
)(InviteDialog)

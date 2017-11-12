// @flow

import React from 'react'
import {setPropTypes, compose, withHandlers, withState} from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './button'
import {withModal} from "../util/index";
import {reduxForm, Field} from 'redux-form'
import FormInput from './FormInput'
import {required, minLength, email} from '../util'
import {requestInvite} from '../util/service'
import {withToast} from "../util/hoc";

const Form = styled.form`
	display: flex;
	flex-direction: column;
`

const matchWith = (nameToMatch) => (value, allValue = {}) => {
	const ret = value === allValue[nameToMatch]
		? undefined
		: `Not match with ${nameToMatch}`
	console.log(ret, 777, value, allValue, nameToMatch)
	return ret
}

const minLength3 = minLength(3)
const matchWithConfirmedEmail = matchWith('confirmedEmail')
const matchWithEmail = matchWith('email')

const InviteDialog = (props) => {
	const {handleSubmit, submitting, save } = props
	
	return (
		<Form onSubmit={handleSubmit(save)}>
			<h2>Request an invite</h2>
			<Field
				name="name" component={FormInput} placeholder="Full Name"
				validate={[ required, minLength3 ]}
			/>
			<Field
				name="email" component={FormInput} placeholder="Email"
				validate={[required, email, matchWithConfirmedEmail]}
			/>
			<Field
				name="confirmedEmail" component={FormInput} placeholder="Confirmed Email"
				validate={[required, email, matchWithEmail]}
			/>
			<Button type="submit" disabbled={submitting}>Save</Button>
		</Form>
	)
}

export default compose(
	withModal,
	withToast,
	withHandlers({
		save: props => form => {
			const {closeModal, setModalSpinning, toast, setModalSpinningOff} = props
			setModalSpinning()
			return requestInvite(form.name, form.email)
			.then(res => {
				setModalSpinningOff()
				if (res.success) {
					closeModal()
					return toast('All done, saved successfully', 'info')
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

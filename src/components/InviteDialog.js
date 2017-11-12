// @flow

import React from 'react'
import {setPropTypes, compose, withHandlers} from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'
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
const Title = styled.h2`
	color: rgb(47, 48, 51);
	font-size: 2em;
	margin: 0;
	font-weight: 400;
`

const matchWith = (nameToMatch) => (value, allValue = {}) => value === allValue[nameToMatch]
		? undefined
		: `Not match with ${nameToMatch}`

const minLength3 = minLength(3)
const matchWithConfirmedEmail = matchWith('confirmedEmail')
const matchWithEmail = matchWith('email')

const Header = styled.div`
	padding: 0 2em 2em 2em;
`
const InviteDialog = (props) => {
	const {handleSubmit, submitting, save } = props
	
	return (
		<Form onSubmit={handleSubmit(save)}>
			<Header>
				<Title>Request an invite</Title>
			</Header>
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

// @flow

import React from 'react'
import {setPropTypes, compose, withHandlers, withState} from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './button'
import {withCloseModal} from "../util/index";
import {reduxForm, Field} from 'redux-form'
import FormInput from './FormInput'
import {required} from '../util'
import {requestInvite} from '../util/service'
import {withOpenModal} from "../util/hoc";


const Form = styled.form`
	display: flex;
	flex-direction: column;
`
const Error = styled.p`
	color: red;
	font-size: 1em;
`
const InviteDialog = (props) => {
	const {handleSubmit, submitting, save, state: {errorMessage} } = props
	
	return (
		<Form onSubmit={handleSubmit(save)}>
			<h2>Request an invite</h2>
			<Error>{errorMessage}</Error>
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
	withOpenModal,
	withState('state', 'setState', {}),
	withHandlers({
		save: props => form => {
			const {setState, open} = props
			return requestInvite(form.name, form.email)
			.then(res => {
				if (res.success) {
					return open(
						'message',
						{
							title: 'All done',
							message: 'You will be one of the first to experience Broccoli & Co, when we launch.'
						}
					)
				}
				setState({errorMessage: res.message})
			})
		}
	}),
	setPropTypes({
		title: PropTypes.string,
		message: PropTypes.string
	}),
	reduxForm({ form: 'invite' })
)(InviteDialog)
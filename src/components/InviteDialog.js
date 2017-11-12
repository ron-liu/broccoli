// @flow

import React from 'react'
import {setPropTypes, compose, withHandlers} from 'recompose'
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
const InviteDialog = (props) => {
	const {close, handleSubmit, pristine, reset, submitting, save } = props
	
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
	withCloseModal,
	withOpenModal,
	withHandlers({
		save: props => form => {
			return requestInvite(form.name, form.email)
			.then(res => {
				if (res.success) {
					props.open(
						'message',
						{
							title: 'All done',
							message: 'You will be one of the first to experience Broccoli & Co, when we launch.'
						}
					)
				}
			})
		}
	}),
	setPropTypes({
		title: PropTypes.string,
		message: PropTypes.string
	}),
	reduxForm({ form: 'invite' })
)(InviteDialog)
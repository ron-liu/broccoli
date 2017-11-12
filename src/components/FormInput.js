import React from 'react'
import styled from 'styled-components'
import {compose, setPropTypes} from 'recompose'
import PropTypes from 'prop-types'

const InputWrapper = styled.div`
	margin-bottom: 1rem;
`

const Input = compose(
	setPropTypes({error: PropTypes.bool})
)(styled.input`
	height: 2rem;
	padding: 0 3rem 0 10px;
	font-size: 1rem;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	border-bottom: 1px solid ${props=>props.error ? 'red': 'rgb(220, 223, 229)'};
	color: rgb(85, 85, 85);
	width: 100%;
	box-sizing: border-box;
	transition: all 1s ease;
	&:focus {
		outline: none;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 2px solid ${props=>props.error ? 'red': 'rgb(220, 223, 229)'};
	}
`)

const Error = styled.div`
	font-size: 0.9rem;
	color: red;
	text-align: left;
	padding: 2px 10px;
	height: 1rem;
`

const FormInput = ({
	input,
	placeholder,
	type,
	meta: { touched, error }
}) => {
	const hasError = touched && (!!error)
	return (
		<InputWrapper>
			<Input {...input} error={hasError} placeholder={placeholder} type={type} />
			<Error>{hasError ? error: ''}</Error>
		</InputWrapper>
	)
}

export default FormInput

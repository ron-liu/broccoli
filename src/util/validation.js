// @flow

export const required = (value: string) => (value ? undefined : 'Required')
export const minLength = (min: number) => (value: string) => {
	const ret = value && value.length < min ? `Must be ${min} characters or more` : undefined
	console.log(min, value, '898', ret)
	return ret
}

export const email = (value:string) =>
	(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
		? 'Invalid email address'
		: undefined
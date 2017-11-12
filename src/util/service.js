// @flow

type Result = {
	success: boolean,
	message?: string
}

export const requestInvite = (name: string, email:string): Promise<Result> => {
	const URL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth'
	
	return fetch(
		URL,
		{
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name, email})
		}
	)
	.then(res => {
		const success = res.status === 200
		if (success) {
			return {success}
		}
		return res.json().then(x=>({success, message: x.errorMessage}))
	})
}
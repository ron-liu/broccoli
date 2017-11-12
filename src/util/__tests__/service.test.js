import {requestInvite} from '../service'
import fetchMock from 'fetch-mock'

afterEach(() => fetchMock.restore())

it ("normally should return success", () => {
	fetchMock.postOnce('*', "Registered")
	
	expect(requestInvite({name: 'ron', email: 'ron@example.com'}))
	.resolves.toEqual({success: true})
})

it ("invite using usedemail@airwallex.com should return success", () => {
	fetchMock.postOnce('*', {status: 400, body: {errorMessage:"Bad Request: Email is already in use"}})
	
	return expect(requestInvite({name: 'usedemail', email: 'usedemail@airwallex.com'}))
	.resolves.toEqual({success: false, message: 'Bad Request: Email is already in use'})
	
})

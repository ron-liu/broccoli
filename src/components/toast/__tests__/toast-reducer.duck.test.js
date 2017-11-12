import reducer, {clear, toast} from '../toast-reducer.duck'

it('init should work', () => {
	expect(reducer(undefined, {type: 'init'}))
	.toEqual({hasMessage: false})
})
//todo: use some mock timer to pass it
it.skip('toast should work', () => {
	expect(reducer(undefined, toast('ready!')))
	.toEqual({hasMessage: true, message: 'ready!'})
})
it('clear should work', () => {
	expect(reducer({hasMessage: true, message: 'ready!'}, clear()))
	.toEqual({hasMessage: false})
})

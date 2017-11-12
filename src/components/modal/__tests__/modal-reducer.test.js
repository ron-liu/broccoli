import reducer, {openModal, closeModal} from '../modal-reducer.duck'

it('should be closed when init', () => {
	expect(reducer(undefined, {type: 'init'})).toEqual({opened: false})
})

it('should be opened when send open action', () => {
	expect(reducer(undefined, openModal('invite', {title: 'hi'})))
	.toEqual({
		opened: true,
		dialogName: 'invite',
		dialogProps: {title: 'hi'}
	})
})

it('should be closed when send close action', () => {
	expect(reducer(
		{
			opened: true,
			dialogName: 'invite',
			dialogProps: {title: 'hi'}
			
		},
		closeModal()
	))
	.toEqual({opened: false})
})

it ('should unchanged when send wrong one', () => {
	const state = {
		opened: true,
		dialogName: 'invite',
		dialogProps: {title: 'hi'}
		
	}
	expect(reducer(state, {type: 'nothing'}))
	.toEqual(state)
})

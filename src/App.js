// @flow

import React from 'react';
import {Header, Footer, Content, Modal, Toast} from './components'
import styled from 'styled-components'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import modalReducer from './components/modal/modal-reducer.duck'
import { reducer as formReducer } from 'redux-form'
import toastReducer from './components/toast/toast-reducer.duck'
import thunk from 'redux-thunk'

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;
const store = createStore(
    combineReducers({
        modal: modalReducer,
        form: formReducer,
	    toast: toastReducer
    }),
	composeEnhancers(
		applyMiddleware(thunk)
	)
)

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	position: relative;
`

const App = () => (
    <Provider store={store}>
    <Layout>
        <Header/>
        <Content/>
        <Footer/>
        <Modal/>
	    <Toast/>
    </Layout>
    </Provider>
)

export default App;

// @flow

import React from 'react';
import {Header, Footer, Content, Modal, Toast} from './components'
import styled, {injectGlobal} from 'styled-components'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import modalReducer from './components/modal/modal-reducer.duck'
import { reducer as formReducer } from 'redux-form'
import toastReducer from './components/toast/toast-reducer.duck'
import thunk from 'redux-thunk'
import 'typeface-roboto'

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
injectGlobal`
	body {
		font-family: Roboto, Arial, sans-serif;
		margin:0;
		box-sizing: border-box;
	}
	button {
		font-family: Roboto, Arial, sans-serif;
	}
	.fade-enter {
	  opacity: 0.01;
	}
	
	.fade-enter.fade-enter-active {
	  opacity: 1;
	  transition: opacity 700ms ease-in;
	}
	
	.fade-exit {
	  opacity: 1;
	}
	
	.fade-exit.fade-exit-active {
	  opacity: 0.01;
	  transition: opacity 560ms ease-in;
	}
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

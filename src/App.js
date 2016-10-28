import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component{

    componentDidMount(){

        const config = {
            apiKey: "AIzaSyDecfcPxGOidxUHAqBs2cKHz5yhLfDRQLI",
            authDomain: "manager-b7767.firebaseapp.com",
            databaseURL: "https://manager-b7767.firebaseio.com",
            storageBucket: "manager-b7767.appspot.com",
            messagingSenderId: "1056610658772"
        };

        firebase.initializeApp(config);

    }



    render(){

        const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
};


export default App;
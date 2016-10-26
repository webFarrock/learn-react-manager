import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import reducer from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
        return (
            <Provider store={createStore(reducer)}>
                <LoginForm />
            </Provider>
        );
    }
};


export default App;
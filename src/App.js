import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    state = {
        loggedIn: null
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDP1hIvJg9MiJEZCjl9YkUOTMYQXUtV0Yo",
            authDomain: "auth-1045d.firebaseapp.com",
            databaseURL: "https://auth-1045d.firebaseio.com",
            projectId: "auth-1045d",
            storageBucket: "auth-1045d.appspot.com",
            messagingSenderId: "404076036806"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
              } else {
                this.setState({ loggedIn: false });
              }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
              return (
                <View style={{ flexDirection: 'row' }}>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </View>
              );
            case false:
              return <LoginForm />;
            default:
              return <Spinner size="large" />;
          }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                {this.renderContent()}
            </View>
        );
    }
}
import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChange, passwordChange, loginUser} from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChange(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
    }
}


const mapStateToProps = ({auth}) => {
    return { email, password, error, loading } = auth;
}

export default connect(mapStateToProps, {
    emailChange,
    passwordChange,
    loginUser
})(LoginForm);

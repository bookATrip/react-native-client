import React, { Component } from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native';
import Axios from 'axios';
import { connect } from 'react-redux'
import { userLogedIn } from '../Actions'
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            pass: ''
        }
    }


    onLogin = () => {
        const { username, pass } = this.state;
        const { userLogedIn } = this.props;
        Axios.post('http://192.168.1.64:3000/login', { username, pass })
            .then((res) => {
                alert('alooo')
                userLogedIn(res.data)
            })
            .catch(err => {
                alert('are you kidding me!')
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(pass) => this.setState({ pass })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin}
                />
            </View>
        )
    }
}

export default connect(null, { userLogedIn })(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
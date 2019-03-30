import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class SplashScreen extends Component {

    _toLogIn = async () => {
        this.props.navigation.navigate('SignIn')
    }

    _toSignUp = async () => {
        this.props.navigation.navigate('SignUp')
    }

    // demo tryout
    _toGetIn = async () => {
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    SplashScreen
                </Text>

                <TouchableOpacity
                    onPress={this._toLogIn}
                >
                    <Text>
                        Log In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this._toSignUp}
                >
                    <Text>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this._toGetIn}
                >
                    <Text>
                        Get In
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
        fontWeight: '600'
    }
})
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class SignInScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    SignInScreen
                </Text>
            </View>
        )
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    text: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
        fontWeight: '600'
    }
})
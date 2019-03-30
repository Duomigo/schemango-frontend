import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class AuthLoadingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    AuthLoadingScreen
                </Text>
            </View>
        )
    }
}

export default AuthLoadingScreen;

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
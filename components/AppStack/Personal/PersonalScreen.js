import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet
} from 'react-native';

class PersonalScreen extends Component {
    _signOutAsync = async () => {
        //await AsyncStorage.clear();
        this.props.navigation.navigate('Splash')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    PersonalScreen
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._signOutAsync}
                >
                    <Text>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default PersonalScreen;

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
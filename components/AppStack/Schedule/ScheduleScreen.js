import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CalendarScreen from './CalendarScreen';
import { SafeAreaView } from 'react-navigation';

class ScheduleScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <SafeAreaView>
                <CalendarScreen />
            </SafeAreaView>
        )
    }
}

export default ScheduleScreen;

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
});

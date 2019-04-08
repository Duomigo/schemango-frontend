import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import AgendaScreen from './AgendaScreen';
import CalendarScreen from './CalendarScreen'

class ScheduleScreen extends Component {
    render() {
        return (
            // <View style={styles.container}>
            //     <Text style={styles.text}>
            //         ScheduleScreen
            //     </Text>
            // </View>
            <CalendarScreen />
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
})
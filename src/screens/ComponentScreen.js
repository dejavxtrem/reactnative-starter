import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentScreen = () => {

const greeting = 'Dejay'
    return ( <View>
    <Text style={styles.textStyle}>
        This is the component screen
    </Text>
    <Text style={styles.firstStyle}>
        Getting started with React Native
    </Text>

    <Text style={styles.secondStyle}>
        My name is Dejay
    </Text>

    <Text style={styles.thirdStyle}>
       {greeting}
    </Text>

    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    firstStyle: {
        fontSize: 45
    },
    secondStyle: {
        fontSize: 20
    },
    thirdStyle: {
        fontSize: 20
    }
})

export default ComponentScreen;
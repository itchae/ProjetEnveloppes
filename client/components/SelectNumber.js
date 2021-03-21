import React from 'react'; //permet de créer des composants
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; //composants react native

export default function SelectNumber({numberOfBill, setNumberOfBill, disabled}) {

    const decrement = () => {
        const res = parseInt(numberOfBill)-1;
        if(parseInt(numberOfBill)>0){
            setNumberOfBill(res.toString());
        }
        
    }

    const increment = () => {
        if(!disabled){
            const res = parseInt(numberOfBill)+1
            setNumberOfBill(res.toString());
        }
    }

    return (
        <View style={styles.view}>
            <TouchableOpacity
                onPress={increment}
                style={ disabled ? styles.disabled : styles.roundButton}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
            <Text
                style={styles.textInput}
            >
                {numberOfBill}
            </Text>
            <TouchableOpacity
                onPress={decrement}
                style={styles.roundButton}>
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
    },
    textInput: {
        width: 'auto',
        marginLeft: 10,
        margin: 3
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        margin: 0
    },
    disabled: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 40,
        backgroundColor: 'grey',
        color: 'white'
    },
    roundButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 40,
        backgroundColor: 'purple',
        color: 'white'
    }
  });
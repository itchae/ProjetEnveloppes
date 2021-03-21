import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'; //permet de créer des composants
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'; //composants react native
import SelectNumber from './SelectNumber';

export default function BillAmount({billValue, totalAmount, setTotalAmount, disabled}) {

    const [numberOfBill, setNumberOfBill] = useState(0);

    const onChange = (nb) => {
        setTotalAmount(nb*billValue);
    }

    return (
        <View>
            <Text>Valeur du billet : {billValue}</Text>
            <SelectNumber onChange={onChange} numberOfBill={numberOfBill} setNumberOfBill={setNumberOfBill} disabled={disabled}/>
            <Text>{totalAmount}</Text>
        </View>
    );
}
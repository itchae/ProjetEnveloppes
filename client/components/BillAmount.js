import React from 'react'; //permet de créer des composants
import {Text, View} from 'react-native'; //composants react native
import SelectNumber from './SelectNumber';

export default function BillAmount({billValue, numberOfBill, setNumberOfBill, disabled}) {

    return (
        <View>
            <Text>Valeur du billet : {billValue}</Text>
            <SelectNumber numberOfBill={numberOfBill} setNumberOfBill={setNumberOfBill} disabled={disabled}/>
            <Text>{billValue * numberOfBill}</Text>
        </View>
    );
}
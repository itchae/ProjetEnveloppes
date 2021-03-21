import React, {useState} from 'react'; //permet de créer des composants
import { Button, StyleSheet, Text, View} from 'react-native'; //composants react native
import BillAmount from '../components/BillAmount';
import {getGuichetTotal, retirerBillets} from '../services/GuichetService';

export default function Guichet() {

    const [nbOfFive, setNbOfFive] = useState(0);
    const [nbOfTen, setNbOfTen] = useState(0);
    const [nbOfTwenty, setNbOfTwenty] = useState(0);
    const [nbOfFifty, setNbOfFifty] = useState(0);
    const [total, setTotal] = useState(0);

    const addToGuichet = () => {
      retirerBillets(nbOfFive, nbOfTen, nbOfTwenty, nbOfFifty);
    }

    const getTotal = () => {
      getGuichetTotal().then(res => setTotal(res));
    }

    getTotal();
    console.log(total);
  
    const billTotalAmount = (5 * nbOfFive) + (10 * nbOfTen) + (20 * nbOfTwenty) + (50 * nbOfFifty);
    const maxValue = 500;
    const reste = maxValue - billTotalAmount;

    return ( //JSX
      <View style={styles.container}>
        <Text>A ne pas dépasser : {maxValue}</Text>
        <View style={styles.rowBill}>
          <BillAmount billValue={5} numberOfBill={nbOfFive} setNumberOfBill={setNbOfFive} disabled={reste - 5 < 0}/>
          <BillAmount billValue={10} numberOfBill={nbOfTen} setNumberOfBill={setNbOfTen} disabled={reste - 10 < 0}/>
        </View>
        <View style={styles.rowBill}>
          <BillAmount billValue={20} numberOfBill={nbOfTwenty} setNumberOfBill={setNbOfTwenty} disabled={reste - 20 < 0}/>
          <BillAmount billValue={50} numberOfBill={nbOfFifty} setNumberOfBill={setNbOfFifty} disabled={reste - 50 < 0}/>
        </View>
        <Text>Total des billets : {billTotalAmount}</Text>
        <Button 
          onPress={addToGuichet}
          title="Retirer"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
}
  
const styles = StyleSheet.create({ // stylesheet permet juste d'être un peu plus performant et d'avoir plus de controle
    container: {
        flex: 1,
        backgroundColor: '#fff', //utiliser camelCase pour le style 
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowBill: {
        flexDirection: 'row'
    }
});
  
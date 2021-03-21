import React, {useState} from 'react'; //permet de créer des composants
import { Button, StyleSheet, Text, View} from 'react-native'; //composants react native
import BillAmount from './BillAmount';

export default function Guichet() {

    const [totalAmountFive, setTotalAmountFive] = useState(0);
    const [totalAmountTen, setTotalAmountTen] = useState(0);
    const [totalAmountTwenty, setTotalAmountTwenty] = useState(0);
    const [totalAmountFifty, setTotalAmountFifty] = useState(0);

    const addToGuichet = {
      
    }
  
    const billTotalAmount = totalAmountFive + totalAmountTen + totalAmountTwenty + totalAmountFifty;
    const maxValue = 500;
    const reste = maxValue - billTotalAmount;
    return ( //JSX
      <View style={styles.container}>
        <Text>A ne pas dépasser : {maxValue}</Text>
        <View style={styles.rowBill}>
          <BillAmount billValue={5} totalAmount={totalAmountFive} setTotalAmount={setTotalAmountFive} disabled={reste - 5 < 0}/>
          <BillAmount billValue={10} totalAmount={totalAmountTen} setTotalAmount={setTotalAmountTen} disabled={reste - 10 < 0}/>
        </View>
        <View style={styles.rowBill}>
          <BillAmount billValue={20} totalAmount={totalAmountTwenty} setTotalAmount={setTotalAmountTwenty} disabled={reste - 20 < 0}/>
          <BillAmount billValue={50} totalAmount={totalAmountFifty} setTotalAmount={setTotalAmountFifty} disabled={reste - 50 < 0}/>
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
  
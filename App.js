import React, { useState } from 'react'; //permet de créer des composants
import { StyleSheet, View } from 'react-native'; //composants react native
import Guichet from './client/pages/Guichet';

export default function App() {

  const [totalAmountFive, setTotalAmountFive] = useState(0);
  const [totalAmountTen, setTotalAmountTen] = useState(0);
  const [totalAmountTwenty, setTotalAmountTwenty] = useState(0);
  const [totalAmountFifty, setTotalAmountFifty] = useState(0);

  const billTotalAmount = totalAmountFive + totalAmountTen + totalAmountTwenty + totalAmountFifty;
  const maxValue = 500;
  const reste = maxValue - billTotalAmount;
  return ( //JSX
    <View style={styles.container}>
      <Guichet/>
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

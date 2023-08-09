import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = usestate('BRL')
  const [moedaDestino, setMoedaOrigem] = usestate('USD')
  const [valorConvertido, setValorConvcertido] = useState('')

 const buscarHandle = () => {
 let URL =  https://economia.awesomeapi.com.br/last/USD-BRL
 setValorConvcertido(URL);
 }
    const limparResultado = ()=> {
      setValorConvcertido('')
    }


  return (
    <View style={styles.container}>
      <Text>Conversor de Moedas</Text>
<text>
   moeda 1
</text>
<Picker
style={{heigth: 50, width: 200,}}
selectValue={moedaOrigem}
onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
>
<Picker.Item label="Real Brasileiro" value="BRL" />
        <Picker.Item label="Dólar Americano" value="USD" />
        <Picker.Item label="Ouro" value="XAU" />
        <Picker.Item label="Bitcoin" value="BTC" />
      </Picker>
    


      <text>
   moeda 2
</text>
<Picker
selectValue={moedaOrigem}
onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
>
<Picker.Item label="Real Brasileiro" value="BRL" />
        <Picker.Item label="Dólar Americano" value="USD" />
        <Picker.Item label="Ouro" value="XAU" />
        <Picker.Item label="Bitcoin" value="BTC" />
      </Picker>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    

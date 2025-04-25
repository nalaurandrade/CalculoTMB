import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// ❌ Importar o Alert para mostrar a mensagem de erro
// ✅ Adicione: import { Alert } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [pesokg, setPesokg] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [tmbResult, setTmbResult] = useState ('');

  const CalcularTMB = () => { 
    const pesokgNum = parseFloat(pesokg);
    const alturaNum = parseFloat(altura);
    const idadeNum = parseFloat(idade);    
    
    if (!isNaN(pesokgNum) && !isNaN(alturaNum) && !isNaN(idadeNum)){ //converter com 'Num'
      const tmb = 88.36+(13.4 * pesokgNum)+(4.8*alturaNum)-(5.7*idadeNum); 
      let classificacao = '';
      if(tmb < 1100){ // const
        classificacao = 'Muito baixa';
      }else if (tmb > 2500){
        classificacao = 'Muito alta';
      }
      else if (tmb >= 1101 && tmb < 2499){
        classificacao = 'Normal';
      }      
      setTmbResult(`O seu índice de TMB é de ${tmb.toFixed(2)}.É classificado como ${classificacao}`);
    } else {
      const mensagemErro = `Insira valores válidos.`;
      setTmbResult(mensagemErro);
      Alert.alert('Erro', mensagemErro);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Peso (kg):</Text>
      <TextInput
        placeholder='Digite o seu peso'
        keyboardType='numeric'
        onChangeText={(pPeso) => setPesokg(pPeso)}
        value={pesokg}
      />
    <Text>Idade:</Text>
          <TextInput
            placeholder='Digite a sua idade'
            keyboardType='numeric'
            onChangeText={(iIdade) => setIdade(iIdade)}
            value={idade}
          />

    <Text>Altura:</Text>
              <TextInput
                placeholder='Digite sua altura em centímetros'
                keyboardType='numeric'
                onChangeText={(aAltura) => setAltura(aAltura)}
                value={altura}
              />              

      <Button title="Calcular TMB" onPress={CalcularTMB}/>

      {tmbResult != '' && <Text>{tmbResult}</Text>}

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

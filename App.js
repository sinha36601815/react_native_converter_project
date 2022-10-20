import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [k, SetK] = useState(0);
  const [m, SetM] = useState(0);
  function Kf(e){
    const value = parseFloat(e);
    SetM(value*1000);
  }
  function Mf(e){
    const value = parseFloat(e);
    SetK(value/1000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Converter</Text>
      <Text style={styles.header1}>meter {m ? m : 0}</Text>
      <TextInput
        style={{
          height: 40,
          width:250,
          margin:10,
          padding:10,
          borderWidth: 1,
          placeholderTextColor: 'gray',
          
        }}
        onChangeText={Kf}
        value={k}
        placeholder="give kilometer"
        keyboardType="numeric"
      />
      <Text style={styles.header1}>kilometer {k ? k : 0}</Text>
      <TextInput
        style={{
          height: 40,
          width:250,
          margin:10,
          padding:10,
          borderWidth: 1,
          placeholderTextColor: 'gray',
        }}
        onChangeText={Mf}
        value={k}
        placeholder="give meter"
        keyboardType="numeric"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: "red",
    fontSize: 30,
    marginTop:50,
    marginBottom:10

  },
  header1: {
    color: "black",
    fontSize: 20
  },
  
});

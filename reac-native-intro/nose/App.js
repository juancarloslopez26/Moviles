import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, Image, TouchableOpacity, StyleSheet } from 'react-native';
import fedelobo from './assets/fedelobo.jpg';


export default function App() {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [showImage, setShowImage] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const changeColor = () => setBgColor(bgColor === '#ffffff' ? '#add8e6' : '#ffffff');
  const toggleImage = () => setShowImage(!showImage);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}> 
      <Text style={styles.label}>Ingrese texto:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Escribe aquí"
      />
      <Text style={styles.text}>Texto ingresado: {text}</Text>

      <View style={styles.switchContainer}>
        <Text>Activar opción:</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <Button title="Cambiar Color" onPress={changeColor} />
      <Button title={showImage ? "Ocultar Imagen" : "Mostrar Imagen"} onPress={toggleImage} />

      {showImage && <Image source={fedelobo} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
});

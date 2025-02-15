import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';

export default function App() {
  const [message, setMessage] = useState('');
  const [background, setBackground] = useState(require('./assets/background1.webp'));
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleBackgroundChange = () => {
    setBackground(background === require('./assets/background1.webp') ? require('./assets/background2.webp') : require('./assets/background1.webp'));
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji.emoji);
  };

  return (
    <View style={styles.container}>
      <Image source={background} style={styles.background} />
      <TextInput
        style={styles.input}
        placeholder="Escribe tu mensaje aquí..."
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity onPress={() => setIsEmojiPickerOpen(true)} style={styles.emojiButton}>
        <Text style={styles.emojiButtonText}>Añadir Emoji</Text>
      </TouchableOpacity>
      <Button title="Cambiar Fondo" onPress={handleBackgroundChange} />
      <Button title="Compartir Tarjeta" onPress={() => {}} />
      <StatusBar style="auto" />
      <EmojiPicker
        onEmojiSelected={handleEmojiSelect}
        open={isEmojiPickerOpen}
        onClose={() => setIsEmojiPickerOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  emojiButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  emojiButtonText: {
    fontSize: 16,
  },
});
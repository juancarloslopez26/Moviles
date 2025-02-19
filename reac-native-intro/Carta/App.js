import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';

export default function App() {
  const [message, setMessage] = useState('');
  const [background, setBackground] = useState(require('./assets/background1.webp'));
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBackgroundChange = () => {
    setBackground(background === require('./assets/background1.webp') ? require('./assets/background2.webp') : require('./assets/background1.webp'));
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji.emoji);
  };

  const handleSaveCard = () => {
    const newCard = { message, background };
    setCards([...cards, newCard]);
    setMessage('');
    setBackground(require('./assets/background1.webp'));
  };

  const handleCardPress = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCard(null);
  };

  return (
    
    <ScrollView style={styles.container}>
       {/* Vista previa en tiempo real */}
       <View style={styles.previewCard}>
        <Image source={background} style={styles.previewBackground} />
        <Text style={styles.previewText}>{message}</Text>
      </View>
      
      <View style={styles.content}>
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
        <Button title="Finalizar" onPress={handleSaveCard} />
      </View>
      <StatusBar style="auto" />
      <EmojiPicker onEmojiSelected={handleEmojiSelect} open={isEmojiPickerOpen} onClose={() => setIsEmojiPickerOpen(false)} />
      
     

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {cards.map((card, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardPress(card)} style={styles.card}>
            <Text style={styles.cardText}>{`Carta ${index + 1}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedCard && (
        <Modal visible={isModalVisible} transparent={true} animationType="slide" onRequestClose={handleCloseModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Image source={selectedCard.background} style={styles.modalBackground} />
              <Text style={styles.modalText}>{selectedCard.message}</Text>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0'
  },
  background: {
    
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  content: {
    padding: 45,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 5,
  },
  cardText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
  },
  previewCard: {
    margin: 50,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black'
  },
  previewBackground: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  previewText: {
    fontSize: 18,
    textAlign: 'center',
  },
});


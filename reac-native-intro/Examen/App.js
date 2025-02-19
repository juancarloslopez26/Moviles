import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, { name: text, purchased: false }]);
      setText('');
    }
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item.name !== itemToRemove.name));
  };

  const togglePurchased = (itemToToggle) => {
    setItems(items.map(item => 
      item.name === itemToToggle.name ? { ...item, purchased: !item.purchased } : item
    ));
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.label}>Alimentos</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Escribe aquí"
      />
      <View style={styles.buttonContainer}>
        <Button title="Agregar" onPress={addItem} />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={[styles.text, item.purchased && styles.purchasedText]}>{item.name}</Text>
            <View style={styles.buttonGroup}>
              <Button title="Eliminar" onPress={() => removeItem(item)} />
              <Button title={item.purchased ? "No comprado" : "Comprado"} onPress={() => togglePurchased(item)} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  buttonContainer: {
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
 
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
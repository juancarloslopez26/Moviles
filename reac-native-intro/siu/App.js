import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useState } from 'react';

export default function App() {
  // Estado para manejar los checkboxes
  const [checkedItems, setCheckedItems] = useState({});

  // Función para alternar el estado de un checkbox
  const toggleCheckbox = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>📝 To-Do List</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBody}>🛒 Lista de Compras</Text>
        </View>
        <ScrollView contentContainerStyle={styles.bodyContainer}>
          {["Pasta", "Arroz", "Pollo", "Carne de res", "Pescado", "Ajo", 
            "Espinacas", "Zanahorias", "Brócoli", "Naranjas", "Plátanos", 
            "Manzanas", "Yogur", "Queso", "Mantequilla"
          ].map((item, index) => (
            <CheckBox 
              key={index} 
              title={item} 
              containerStyle={styles.checkbox} 
              textStyle={styles.checkboxText} 
              checked={checkedItems[item] || false} 
              onPress={() => toggleCheckbox(item)}
            />
          ))}
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: '#2c3e50',
    height: "12%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: "#ecf0f1",
    fontSize: 22,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    width: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBody: {
    color: "#34495e",
    fontSize: 22,
    fontWeight: 'bold',
  },
  bodyContainer: {
    alignItems: "center",
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  checkbox: {
    backgroundColor: "#ffffff",
    width: '80%',
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingVertical: 10,
  },
  checkboxText: {
    fontSize: 16,
    fontWeight: '500',
    color: "#2c3e50",
  },
});

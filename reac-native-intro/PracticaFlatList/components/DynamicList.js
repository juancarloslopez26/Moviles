import { FlatList, Text, View, Image } from 'react-native';
import styles from '../styles/styles';
import data from '../data/data';

export default function DynamicList() {
    console.log(data); // Agrega este console.log para verificar los datos
    return (
        <View style={styles.container}>
            <Text style={styles.TextBody}>Jugadores disponibles</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemAge}>{item.age}</Text>
                            <Image source={item.image} style={styles.image} />
                        </View>
                    </View>
                )}
                style={styles.FlatList}
            />
        </View>
    );
}
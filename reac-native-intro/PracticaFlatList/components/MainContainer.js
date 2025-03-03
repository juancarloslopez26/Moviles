import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import styles from '../styles/styles';
import DynamicList from './DynamicList';

export default function MainContainer() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.HeaderBody}>FIFA 25</Text>
                <View style={styles.body}>
                    <DynamicList />
                </View>
            </View>
        </View>
    );
}
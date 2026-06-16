import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';

export default function Header (){
    return(

      <View   View style={styles.viewHeader}>

        <Feather name="menu" size={24} color="#FF4FA3" />

        <Text style={styles.textHeader}> TECFILMES </Text>

        <TouchableOpacity></TouchableOpacity>
      </View>

    )
}


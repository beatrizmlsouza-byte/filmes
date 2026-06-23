import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';

export default function Search(){
    return(
        
      <View style={styles.containerSearch}>
      <TextInput
        placeholder='Digite o filme que deseja buscar'
        placeholderTextColor="#FF4FA3"
        style={styles.inputSearch}
      />

      <TouchableOpacity>
        <Feather name="search" size={24} color="#FF4FA3"/>
      </TouchableOpacity>
    </View>


    )
}
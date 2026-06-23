import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';

export default function Banner (){
    return(

        <>

      <Text style={styles.textBanner}> Em cartaz </Text>
    

    <Image 
    source={require('../../../assets/cachorro.png')} 
    style={styles.imageBanner}
  />

  <StatusBar style="light" />
  </>
 );
}

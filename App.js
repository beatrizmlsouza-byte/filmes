import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>

      {/* INICIO DA HEADER */}
      <View style={styles.viewHeader}>
        <Feather name="menu" size={24} color="#FF4FA3" />

        <Text style={styles.textHeader}> TECFILMES </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      {/* INICIO DA BARRA DE PESQUISA */}
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

      {/* Inicio do banner */}
      <Text style={styles.textBanner}> Em cartaz </Text>

      <Image 
        source={require('./assets/cachorro.png')} 
        style={styles.imageBanner}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
  },

  // HEADER
  viewHeader:{
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between'
  },

  textHeader: {
    fontSize: 25,
    color: '#FF4FA3',
    fontWeight: 'bold',
  },

  containerSearch: {
    marginTop: 20,
    width:"90%",
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF4FA3'
  },

  inputSearch:{
    height: 40,
    padding: 8,
    width: "100%",
    color: '#FF4FA3'
  },

  imageBanner:{
    width: "50%",
    height: "50%",
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FF4FA3'
  },

  textBanner: {
    color: '#FF4FA3',
    width: '90%',
    fontSize: 30,
    marginTop:20,
    fontWeight:'bold',
  }
});
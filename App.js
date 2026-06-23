import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Banner from './src/components/Banner';
import styles from './src/components/Search/styles';
import { FlatList } from 'react-native-web';
import movies from './movies'

export default function App() {
  return (
    <View style={styles.container}>

      {/* INICIO DA HEADER */}
     
     <Header></Header>
     <Search></Search>
     <Banner></Banner>
      
      <View style = {{width: '90%'}}>

      <FlatList
      horizontal= {true}
      data={movies}
      keyExtractor={(item)=>item.id}
      renderItem={({item}) => (

        <TouchableOpacity>
          <Image style = {{width: 80 , height: 100}} source={{uri: item.imagem}}></Image>
          <Text>{item.nome}</Text>
        </TouchableOpacity>
      
  )}

      />

     

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
  },

});
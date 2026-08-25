import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Banner from './src/components/Banner';

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

        <TouchableOpacity style={styles.containerFilmes}>
          <Image style = {styles.images} source={{uri: item.imagem}}></Image>
          <Text style={styles.titulo}>{item.nome}</Text>
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

  
  containerFilmes:{
    paddingTop:20,
    paddingBottom:16,
    paddingRight:16,
    width:140,
    heigh:28
},

titulo:{
    color:'#black',
    fontSize:12,
    paddingTop:8  
},

textNota:{
    fontSize:10,
    color:'#black',
    paddingLeft:4
},

images:{
    width:'100%',
    height:170,
    borderRadius: 8,    
   
}
});
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';

import Header from './src/components/Header'
import Search from './src/components/Search'
import Banner from './src/components/Banner'
import CardMovies from './src/components/CardMovies'
import movies from './movies'


export default function App() {
  return (
    <View style={styles.container}>

      {/*INICIO DA HEADER*/}
      <Header></Header>
    
    {/*INICIO DA BARRA DE PESQUISA*/}
      <Search></Search>

      <Banner></Banner>


      <View style ={{width:'90%'}}>

  <FlatList
 showsVerticalScrollIndicator= {false}
  horizontal={true}
  data={movies}
  keyExtractor={(item)=> item.id}
  renderItem={({item}) => (

  <CardMovies
    titulo = {item.nome }
    imagem = {item.imagem}
    nota = {item.nota}
  
  />

)}


    />


</View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  
});
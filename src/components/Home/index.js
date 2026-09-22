import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';

import Header from '../Header';
import Search from '../Search';
import Banner from '../Banner';
import CardMovies from '../CardMovies';
import movies from '../../../movies'



export default function Home(){
  return(
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
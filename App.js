import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image  } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>

      {/*inicio da header*/}

    <View style = {styles.viewheader}>
    
    
   <Feather name="menu" size={24} color="white" />

   <Text style= {styles.textHeader}>TECFILMES</Text>
   <TouchableOpacity>
    
   </TouchableOpacity>



    </View>



      {/*inicio da barra de pesquisa*/}

      <view style={styles.containerSearch}>
        <TextInput placeholder='Digite o filme que deseja buscar'>
          
        </TextInput>
      </view>





      {/*inicio do banner*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },


  viewheader: {
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    marginTop:10,
    justifyContent: 'space-between',

  },

  textHeader: {

    fontSize:25,
    color:'white',
    fontWeight:'bold'

  },

  containerSearch:{
    marginTop:20,
    width:"90%",
    backgroundColor:'white',
    borderRadius:5,
    padding:8

  }

});

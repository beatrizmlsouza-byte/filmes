import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';

import Rotas from './src/components/rotas';

export default function App() {
  return (
    <Rotas></Rotas>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  
});
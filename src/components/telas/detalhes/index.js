import { View, Text , Image} from "react-native-web";
import { useRoute } from "@react-navigation/native";
import styles from './styles' ;

export default function Detalhes(){
    const route = useRoute();
    return(
        <View>
            <Text>Essa é minha tela de Detalhes</Text>
            <Text> {route.params.titulo}</Text>
            <Text> {route.params.nota}</Text>
            <Image style={styles.containerImagem} source={{uri:route.params.imagem}} />
        </View>
    )
}
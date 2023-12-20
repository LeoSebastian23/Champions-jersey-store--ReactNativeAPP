import { StyleSheet, Text, View} from 'react-native'
import { colors } from '../Global/colors'

const Upper = (cadena) => {
  return cadena.toUpperCase();
};

const Header = ({title = "Producto"}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Upper(title)}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backPrimary,
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
      fontSize:40,
        fontWeight:'500'
    }
})
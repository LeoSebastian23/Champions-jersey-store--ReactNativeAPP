import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { colors } from '../Global/colors'

const CartItem = ({item,removeItem}) => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{item.title}</Text>
            <Text  style={styles.text2}>- Cantidad: {item.quantity} </Text>
            <Text  style={styles.text2}>- Precio $ {item.price}</Text>
        </View>
        <Entypo name='trash' size={25} color="black" style={styles.item} onPress={removeItem} />
    </View>

  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backPrimary,
        opacity:0.95,
        width:280,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#2f4f4f',
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:10,
    },
    textContainer:{
        width:"80",
        flexDirection:'column',
    },
    text1:{
        fontSize:24,
        color:colors.lightGray,
        fontWeight:'500',
        margin:5,
        padding:5,
        borderBottomWidth:2,
    },
    text2:{
        fontSize:20,
        color:colors.lightGray,
        margin:2,
    },
    item:{
        margin:5,
        padding:10,
    },
})
import { StyleSheet, Text, View,Image,useWindowDimensions, Pressable } from 'react-native'
import { colors } from '../Global/colors'
import { useEffect } from 'react'


const ProductItem = ({item ,navigation,route }) => {

  const {width} = useWindowDimensions()

  return (
    <Pressable style={styles.container}  onPress={()=>navigation.navigate("Product",{id:item.id})} >
      <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
   container:{
        width:"70%",
        height:200,
        backgroundColor:colors.backPrimary,
        marginHorizontal:"5%",
        marginVertical:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
    },
    text:{
      width:"90%",
      textAlign:"center",
      fontSize:20,
      fontWeight:'900',
      fontStyle:'italic',
    },
    textMin:{
      width:"90%",
      textAlign:"center",
      fontSize:15,
      fontWeight:'300',
    },
    image:{
        minWidth:90,
        height:"80%",
        width:"80%",
        borderRadius:5,
    }
})
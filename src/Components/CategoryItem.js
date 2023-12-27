import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory} from "../features/shop/shopSlice"

  const Upper = (cadena) => {
    return cadena.toUpperCase();
  };

const CategoryItem = ({category,navigation,route }) => {
  const dispatch = useDispatch()
  return (
    <Pressable onPress={()=> {
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate("Category",{category})
    }
      }>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{Upper(category)}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:colors.backSecondary,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        color:"#f0f8ff"
    },
    text:{
      color:"#f0f8ff",
      fontWeight: '300',
      fontSize: 20,
    }
})
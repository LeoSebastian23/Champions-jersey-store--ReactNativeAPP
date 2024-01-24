import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { colors } from '../Global/colors';
import CardShadow from '../Wrappers/CardShadow';
import { useDispatch } from 'react-redux';
import { setProductsFilteredByCategory } from '../features/shop/shopSlice';

const CategoryItem = ({ category, navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
  onPress={() => {
    dispatch(setProductsFilteredByCategory((category.id)));
    navigation.navigate('Category', { categoryName: category.id });
  }}>
      <CardShadow style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{ uri: category.image }} // Utiliza la URL de la imagen
          resizeMode="cover">
          <Text style={styles.text}>{category.nombre}</Text>
        </ImageBackground>
      </CardShadow>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:200,
        backgroundColor:colors.backGray,
        opacity: 0.8,
        margin:10,
        padding:10,
        alignItems:"center",
        justifyContent:'flex-end',
        color:"#f0f8ff"
    },
    text:{
      color:"#f0f8ff",
      fontWeight: '300',
      fontSize: 30,
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
})
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { colors } from "../Global/colors";
import { useDispatch } from "react-redux";
import { setProductSelected } from "../features/shop/shopSlice";

const ProductItem = ({ item, navigation, route }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatch(setProductSelected(item.id));
        navigation.navigate("Product", { id: item.id });
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerProducts}>
          <ImageBackground
            style={styles.image}
            source={{ uri: item.thumbnail }}
            resizeMode="contain"
          >
            {/* Agregué una View con fondo transparente para evitar que el texto sea afectado */}
          </ImageBackground>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    color: "#f0f8ff",
    display:"flex",
    alignItems:"center"
  },
  containerProducts: {
    width:'60%',
    height: 300,
    backgroundColor: `#ffffff`,
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#f0f8ff",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    alignItems: "flex-end",
    color: "#2f4f4f",
    padding: 5,
    fontWeight: "500",
    fontSize: 25,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
});

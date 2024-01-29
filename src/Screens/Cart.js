import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Alert,
  ImageBackground,
} from "react-native";
import CartItem from "../Components/CartItem";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { usePostOrdersMutation } from "../app/services/shopServices";

const Cart = () => {
  const localId = useSelector((state) => state.auth.value.localId);
  const cart = useSelector((state) => state.cart.value);
  const [triggerPostOrder, { data, isSuccess, isError, error }] =
    usePostOrdersMutation();

  const handleConfirmPress = () => {
    triggerPostOrder({ localId, order: cart });
  };

  // Efecto secundario para mostrar el mensaje de compra exitosa
  React.useEffect(() => {
    if (isSuccess) {
      Alert.alert(
        "Compra Exitosa",
        "¡Gracias por tu compra! El producto fue comprado exitosamente.",
        [{ text: "Aceptar" }]
      );
    } else if (isError) {
      // Puedes manejar errores aquí si es necesario
      Alert.alert(
        "Error",
        "Hubo un problema al procesar la orden. Inténtalo nuevamente."
      );
    }
  }, [isSuccess, isError]);

  return (
    <ImageBackground
      source={require("../../assets/bgcart.jpg")}
      style={styles.containerIMG}
    >
      <View style={styles.container}>
        <FlatList
          data={cart.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CartItem item={item} />}
        />
        <View style={styles.confirmContainer}>
          <Pressable onPress={handleConfirmPress}>
            <Text style={styles.text}>CONFIRMAR</Text>
            <Text style={styles.text2}>Total: $ {cart.total} </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmContainer: {
    backgroundColor: "#20b2aa",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    opacity: 0.95,
    width: "80%",
  },
  text: {
    color: "white",
    fontSize: 24,
    justifyContent: "center",
    // fontFamily:"PlayFair"
  },
  text2: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    // fontFamily:"PlayFair"
  },
  containerIMG: {
    flex: 1,
    resizeMode: "cover", // o 'contain' según tus necesidades
  },
});

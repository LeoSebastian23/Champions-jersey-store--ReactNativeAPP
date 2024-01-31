import { StyleSheet, View, Image, Text } from "react-native";
import AddButton from "../Components/AddButton";
import {
  useGetProfileImageQuery,
  useGetUserLocationQuery,
} from "../app/services/shopServices";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);

  return (
      <View style={styles.container}>
        <Image
          source={data ? { uri: data.image } : require("../../assets/user.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{location?.address}</Text>
        <AddButton
          title={"Agregar foto"}
          onPress={() => navigation.navigate("ImageSelector")}
          style={styles.button}
        />
        <AddButton
          title={location ? "Cambiar Ubicacion" : "Agregar Ubicacion"}
          onPress={() => navigation.navigate("LocationSelector")}
          style={styles.button}
        />
      </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#5f9ea0'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100,
    borderWidth:5,
    borderColor:'#2f4f4f' 
  },
  button: {
    borderRadius: 20,
    color: "#2f4f4f",
  }
});

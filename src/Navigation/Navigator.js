import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'
const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "CATEGORIAS" :
                                        route.name === "Category" ? route.params.category :
                                        "Detalle" 
                    }               />
                }
            }
        }
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={ItemListCategories} />
      <Stack.Screen name="Product" component={ItemDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator
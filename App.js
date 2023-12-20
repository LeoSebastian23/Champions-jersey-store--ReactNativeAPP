import { StyleSheet,StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import Navigator from './src/Navigation/Navigator'
import { fonts } from './src/Global/fonts'



const  App = () => {

  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null
  
  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
      />
      <Navigator/>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'start',
  },
})

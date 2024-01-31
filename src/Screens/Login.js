import {useState ,useEffect} from 'react'
import { View, Text ,StyleSheet, Pressable, ImageBackground} from 'react-native'
import { colors } from '../Global/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'




const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerLogin,{data,isError,isSuccess,error,isLoading}] = useLoginMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{
    if(isSuccess) dispatch(setUser(data))
    if(isError) console.log(error)
  },[data,isError,isSuccess])


  const onSubmit = () => {
    triggerLogin({email,password})
  }
  return (
    <ImageBackground
    source={require("../../assets/bg/ImageBG.jpg")}
    style={styles.containerIMG}
  >
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Login to start</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error=""
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error=""
          />
          <SubmitButton onPress={onSubmit} title="Send"/>
          <Text style={styles.sub}>Not have an account?</Text>
          <Pressable onPress={()=> navigation.navigate("Signup")} >
              <Text style={styles.subLink}>Sign up</Text>
          </Pressable>
      </View>
    </View>
    </ImageBackground>
  )
}


export default Login


const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      backgroundColor:colors.backPrimary,
      opacity:0.9,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20,
    },
    containerIMG: {
      flex: 1,
      resizeMode: "cover", // o 'contain' según tus necesidades
    },
    title:{
      fontSize:22,
      fontWeight:'500',
      letterSpacing: 1,
    },
    sub:{
      fontSize:14,
    },
    subLink:{
      fontSize:14,
      color:"blue"
    }
})
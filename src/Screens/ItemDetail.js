import { StyleSheet, Text, View , Image, Pressable,useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import allProduct from "../Data/products.json"
import { colors } from '../Global/colors'

const ItemDetail = ({route}) => {
  const {id} = route.params

  const [product,setProduct] = useState({})
  const images = product.images ? product.images : []

  useEffect(()=>{

    const productFinded = allProduct.find(product => product.id === id)
    setProduct(productFinded)

  },[id])

  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[2]}}
            resizeMode='cover's
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
        backgroundColor:'#ffffe0'
    },
    content:{
      marginTop:10,
      width:"100%",
      alignItems:'center',
    },
    image:{
      width:"90%",
      borderRadius:10,
      height:300
    },
    goBack:{
      width:"100%",
      backgroundColor:colors.backPrimary,
      padding:10,
      paddingStart:40
     },
     containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25,
     },
     description:{
      fontSize:18,
      fontWeight:"normal",
      color:'#000022',
     },
     containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     title:{
      fontSize:25,
      fontWeight:"900",
      color:'#2f4f4f',
      padding:5,
      borderBottomWidth:1,
      borderTopWidth:1,
      textAlign:'center'
     },
     price:{
      fontSize:30
     },
     buyNow:{
      backgroundColor:'#1e90ff',
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5
     },
     buyNowText:{
      color:"white"
     }
})
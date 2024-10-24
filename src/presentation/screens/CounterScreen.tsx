import {useState} from 'react'
import{Text, View, StyleSheet,Pressable} from 'react-native'


const CounterScreen = () => {
    const [count, setCount] =useState(10);
  return (
    <View style={style.container}>
        <Text style={style.title}>{count}</Text>
        <Pressable
        onPress={()=>setCount(count+1)}
        onLongPress={()=> setCount(0)}
        >
        <Text>+1</Text>
        
        </Pressable>

    </View>
  )
}
const style= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
      fontSize:80,
      color:'black',
      fontWeight:'300'
    }
  
  })

export default CounterScreen
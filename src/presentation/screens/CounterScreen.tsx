import {useState} from 'react'
import{Text, View, StyleSheet,Pressable} from 'react-native'
import PrimaryButton from '../components/shared/PrimaryButton';

const CounterScreen = () => {
    const [count, setCount] =useState(10);
  return (
    <View style={style.container}>
        <Text style={style.title}>{count}</Text>

        <PrimaryButton
        label='Incrementar'
        onPress={()=>setCount(count+1)}
        onLongPress={()=>setCount(0)}
        />
      
        <PrimaryButton
        label='Restar'
        
        onPress={()=>setCount(count-1)}
        onLongPress={()=>setCount(0)}
        />
      
        <PrimaryButton
        label='Resetear'
        onPress={()=>setCount(0)}
        onLongPress={()=>setCount(0)}
        />
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
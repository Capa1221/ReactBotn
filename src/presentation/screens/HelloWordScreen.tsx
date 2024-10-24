import { View, Text, StyleSheet } from 'react-native'

interface Props{
  name?:string;
}


const HelloWordScreen = ({name='Word'}:Props) => {
  return (
    <View style={style.container}>
        <Text numberOfLines={1} ellipsizeMode='middle' style={style.title} >Hola Mundo!{name}</Text>
    </View>
  )
}
const style= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  title:{
    fontSize:45,
    textAlign:'center',
    color:'black',
    padding:20
  }

})

export default HelloWordScreen
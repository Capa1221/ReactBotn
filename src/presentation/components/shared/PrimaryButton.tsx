import React from 'react'
import{Platform,Pressable,StyleSheet,Text} from 'react-native'

interface Props{
  label: String;
  onPress?: () => void;
  onLongPress?: ()=> void;
}

const PrimaryButton = ({label,onPress,onLongPress}:Props) => {
  return (

      <Pressable
        onPress={()=>onPress && onPress()}
        onLongPress={()=>onLongPress && onLongPress()}

        style={({pressed}) =>[
          styles.button,
          pressed && styles.buttonPressed
        ]}
        >
          <Text style={{
            color: Platform.OS === 'android' ? 'while' : '#4746AB',
          }}>{label}</Text>
        </Pressable>
        
        


  )
}
const styles= StyleSheet.create({
  button:{
    backgroundColor:'#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop:10,
    borderRadius:10
  },
  buttonPressed:{
    backgroundColor:'#4746AB'
  }
})

export default PrimaryButton
import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyle } from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const CounterM3Screen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={globalStyle.centercontainer}>
      <Text style={globalStyle.title}>{count}</Text>

      <FAB
      icon= "add-circle-outline"
        style={globalStyle.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      
      <FAB
       icon = "backspace-outline" 
        style={globalStyle.fab2}
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        onLongPress={() => setCount(0)}
      />
      
      <FAB
        icon ="refresh-outline" 
        style={globalStyle.fab3}
        onPress={() => setCount(0)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};

export default CounterM3Screen;

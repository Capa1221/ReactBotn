import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyle } from '../theme/global.styles';

const CounterM3Screen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={globalStyle.centercontainer}>
      <Text style={globalStyle.title}>{count}</Text>
      
      <FAB
        label='+1'
        style={globalStyle.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      
      <FAB
        label='-1'
        style={globalStyle.fab2}
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        onLongPress={() => setCount(0)}
      />
      
      <FAB
        label='Reset'
        style={globalStyle.fab3}
        onPress={() => setCount(0)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};

export default CounterM3Screen;

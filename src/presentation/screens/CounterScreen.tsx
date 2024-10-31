import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import PrimaryButton from '../components/shared/PrimaryButton';

const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>{count}</Text>

      <Button
       /*label1="Incrementar"
        label2='borrar'*/
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode="contained"
        >
          Incrementar
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});

export default CounterScreen;

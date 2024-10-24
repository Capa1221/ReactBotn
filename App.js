import {StatusBar} from 'expo-status-bar';
import { StyleSheet, View, Image, Text,SafeAreaView } from 'react-native';
import HelloWordScreen from './src/presentation/screens/HelloWordScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
       <CounterScreen/>
    </SafeAreaView>
  );
}

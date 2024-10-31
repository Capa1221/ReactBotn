import {StatusBar} from 'expo-status-bar';
import { StyleSheet, View, Image, Text,SafeAreaView } from 'react-native';
import HelloWordScreen from './src/presentation/screens/HelloWordScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';
import CounterM3Screen from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider
    settings={{
      icon: (props)=> <IonIcon { ...props}/>
    }}
    >
      <SafeAreaView style={{flex:1}}>
       <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
    
  );
}

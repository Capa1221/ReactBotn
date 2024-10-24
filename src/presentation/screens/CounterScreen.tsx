import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const CounterScreen = () => {
    const [count, setCount] = useState(10);
    
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1); 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            <Pressable
                onPress={() => setCount(count + 1)}
            >
          
                <Text>+1</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
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
    button: {
        padding: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
});

export default CounterScreen;
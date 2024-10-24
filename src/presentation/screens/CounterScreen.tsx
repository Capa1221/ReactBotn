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
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ddd' : '#007BFF',
                    },
                    styles.button,
                ]}
            >
                <Text style={styles.buttonText}>Incrementar</Text>
            </Pressable>
            <Pressable
                onPress={handleDecrement} 
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ddd' : '#FF5733',
                    },
                    styles.button,
                ]}
            >
                <Text style={styles.buttonText}>Restar</Text>
            </Pressable>
            <Pressable
                onPress={() => setCount(0)} 
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ddd' : '#FFAA00', 
                    },
                    styles.button,
                ]}
            >
                <Text style={styles.buttonText}>Reiniciar</Text>
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
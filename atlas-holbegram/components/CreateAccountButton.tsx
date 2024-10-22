import { View, Pressable, StyleSheet, Alert, Text, SafeAreaView } from 'react-native';
import { Link, router } from "expo-router";
import { container } from './styles';


export default function CreateAccountButton() {
    return (
    <SafeAreaView>
        <View style={styles.button}>
        <Pressable onPress={() => {
            router.replace("/(tabs)/");
        }}>
            <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1ed2af',
        padding: 10,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        width: 350,
        height: 50,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
});
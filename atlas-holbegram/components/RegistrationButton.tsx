import { View, Pressable, StyleSheet, Alert, Text, SafeAreaView } from 'react-native';
import { Link, router } from "expo-router";
import { container } from './styles';


export default function RegistrationButton() {
    return (
        <SafeAreaView>
            <View style={styles.button}>
                <Link href="/register" replace>
                    <Pressable onPress={() => {
                        router.replace("/register");
                    }}>
                        <Text style={styles.buttonText}>Create a new account</Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        borderColor: 'black',
        padding: 2,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
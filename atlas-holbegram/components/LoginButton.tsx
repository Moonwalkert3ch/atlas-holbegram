import { View, Pressable, StyleSheet, Alert, Text, SafeAreaView } from 'react-native';
import { Link, router } from "expo-router";


export default function LoginButton() {
    return (
        <SafeAreaView>
            <View style={styles.button}>
                <Link href="/login" replace>
                    <Pressable onPress={() => {
                        router.replace("/login");
                    }}>
                        <Text style={styles.buttonText}>Login to existinng account</Text>
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
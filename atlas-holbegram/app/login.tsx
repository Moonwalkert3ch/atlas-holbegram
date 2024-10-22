import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";
import { container, form } from "../components/styles";
import { addWhitelistedNativeProps } from "react-native-reanimated/lib/typescript/ConfigHelper";
import Logo from "@/components/logo";

export default function Page() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);

function login() {
    alert(`Logging in with ${email} and ${password}`);
}

return (
    <View style={styles.container}>
        <Logo />
        <Text style={styles.titleText}>Login</Text>
        <TextInput 
            style={{
                height: 50,
                width: 350,
                borderColor: '#1ed2af',
                borderWidth: 1,
                color: 'white',
                padding: 2,
                marginBottom: 15,
                borderRadius: 10,
            }}
            defaultValue="  Email"
        />
        <TextInput 
            style={{
                height: 50,
                width: 350,
                borderColor: '#1ed2af',
                borderWidth: 1,
                color: 'white',
                paddingBottom: 10,
                marginBottom: 15,
                borderRadius: 10,
            }}
            defaultValue="  Password"
        />
        <Link href="/register" replace>
            <Text>Create a new account!</Text>
        </Link>
        <Pressable onPress={() => {
            router.replace("/(tabs)/");
        }}>
            <Text>Sign In!</Text>
        </Pressable>
    </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        fontSize: 32,
        color: 'white',
        padding: 5,
    },
    container: {
        flex: 1, // full screen height
        backgroundColor: '#00003c',
        alignItems: "center",
        // 
    },
})
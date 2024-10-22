import { Link, router, useRouter } from "expo-router";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";  // Import the function directly

import { useState } from "react";
import { Pressable, Text, Alert, View, StyleSheet, TextInput } from "react-native";
import { container, form } from "../components/styles";
import { addWhitelistedNativeProps } from "react-native-reanimated/lib/typescript/ConfigHelper";
import Logo from "@/components/logo";
import CreateAccountButton from "../components/CreateAccountButton";
import LoginButton from "../components/LoginButton";
import { useAuth } from "../components/AuthProvider";
import Loading from "../components/Loading";

export default function Page() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const auth = useAuth();
const router = useRouter();

async function register() {
    setLoading(true)
    try {
        await auth.register(email, password);
        router.replace('/(tabs)/');
    } catch (err) {
        alert("Unable to create account");
        console.error(err);
    }
    setLoading(false)
}

return (
    <View style={styles.container}>
        <Logo />
        <Text style={styles.titleText}>Register</Text>
        <TextInput 
            style={{
                height: 50,
                width: 350,
                borderColor: '#1ed2af',
                borderWidth: 1,
                color: 'white',
                padding: 2,
                marginBottom: 5,
                borderRadius: 10,
            }}
            placeholder="  Email"
            placeholderTextColor='white'
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
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
            placeholder="  Password"
            placeholderTextColor='white'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        {/* pass register function to the create account button to trigger auth logic */}
        <CreateAccountButton onPress={register} />
        <LoginButton />
        {loading && <Loading />}
    </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
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
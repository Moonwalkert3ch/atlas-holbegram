import { Link, router } from "expo-router";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";  // Import the function directly

import { useState } from "react";
import { Pressable, Text, Alert, View, StyleSheet, TextInput } from "react-native";
import { container, form } from "../components/styles";
import { addWhitelistedNativeProps } from "react-native-reanimated/lib/typescript/ConfigHelper";
import Logo from "@/components/logo";
import SignInButton from "@/components/SignInButton";
import RegistrationButton from "@/components/RegistrationButton";

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
                marginBottom: 5,
                borderRadius: 10,
            }}
            placeholder="  Email"
            placeholderTextColor='white'
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
        />
        {/* <Link href="/register" replace>
            <Text>Create a new account!</Text>
        </Link> */}
        <SignInButton />
        <RegistrationButton />
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
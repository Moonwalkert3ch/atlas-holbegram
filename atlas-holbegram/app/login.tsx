import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
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
    },
    container: {
        flex: 1, // full screen height
        backgroundColor: '#00003c',
        alignItems: "center",
        // justifyContent: "center",
    },
})
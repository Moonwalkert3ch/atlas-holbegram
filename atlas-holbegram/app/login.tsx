import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { container, form } from "../components/styles";

export default function Page() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);

function login() {
    alert(`Logging in with ${email} and ${password}`);
}

return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login</Text>
        <Link href="/register" replace>
            <Text>Create a new account!</Text>
        </Link>
        <Pressable onPress={() => {
            router.replace("/(tabs)/");
        }}>
            <Text>Sign In!</Text>
        </Pressable>
    </View>
    )
}
import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
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
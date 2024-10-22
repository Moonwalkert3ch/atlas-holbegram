import { View, Image, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
        <Image 
            style={styles.logo}
            source={require('../assets/images/logo.png')}
            resizeMode="contain" // scales image properly
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 300,
        height: 500,
    }
})
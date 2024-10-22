import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#1ed2af" />
            <Text style={styles.loadingText}>Logging In...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00003c', // Adjust to match your app's theme
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
    },
});
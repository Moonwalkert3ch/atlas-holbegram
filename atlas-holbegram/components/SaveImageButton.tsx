import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 // Import Ionicons

type addPostProps = {
    onPress: () => void;
}

export default function SaveImageButton({ onPress }: addPostProps) {
    return (
        <View style={styles.button}>
            <Pressable onPress={onPress} style={styles.pressable}>
                {/* Render the Ionicon here */}
                <Ionicons name="image-outline" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Choose a photo</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1ed2af',
        padding: 10,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        width: 250,
        height: 50,
        marginTop: 10,
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Align icon and text in the center vertically
    },
    pressable: {
        flexDirection: 'row', // Ensure icon and text are side by side
        alignItems: 'center', // Center items vertically
    },
    icon: {
        marginRight: 10, // Add space between icon and text
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});

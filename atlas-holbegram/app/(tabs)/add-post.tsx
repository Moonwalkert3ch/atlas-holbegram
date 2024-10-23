import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/backgroundImage.png');

export default function Page() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const [loading, setLoading] = useState(false);
    const image = undefined;

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
    
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            console.log(result);
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View style={styles.container} >
            <View style={styles.container}>
            <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          </View>
        </View>
            <View style={[
                styles.footerContainer,
                { marginTop: -150},
            ]}>
                <Button
                    theme="primary"
                    label="Choose a photo"
                    onPress={pickImageAsync}
                />
                <View style={styles.footerContainer}>
                    <Button
                        label="Save photo"
                        onPress={() => alert('Choose a photo to save')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00003c',
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
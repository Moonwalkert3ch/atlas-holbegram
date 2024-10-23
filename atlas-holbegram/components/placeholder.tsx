import { View, StyleSheet } from "react-native";
import { useState } from "react";
import ImageViewer from "./ImageViewer";

export const PlaceholderImage = require('../assets/images/background-image.png');


export default function Placeholder() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: 'white'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
});
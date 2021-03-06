import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import colors from "../config/colors.js"

export default function ImageInput({ imageUri }) {
	return (
		<View style={styles.container}>
			{!imageUri && (
				<MaterialCommunityIcons color={colors.medium} name='camera' size={40} />
			)}
			{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.light,
		borderRadius: 15,
		height: 100,
		justifyContent: "center",
		overflow: "hidden",
		width: 100,
	},
	image: {
		height: "100%",
		width: "100%",
	},
})

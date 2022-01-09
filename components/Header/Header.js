import React from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import styles from './styles'

export const Header = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../../assets/images/logo.png')}
			/>
			<Pressable
				style={styles.menu}
				onPress={() => console.log('Menu button pressed')}
			>
				<Text>Menu</Text>
			</Pressable>
			{/* <Image
				style={styles.menu}
				source={require('../../assets/images/menu.png')}
			/> */}
		</View>
	)
}

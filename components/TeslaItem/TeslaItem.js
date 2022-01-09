import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledBtn from '../StyledBtn/StyledBtn'
import styles from './styles'

export const TeslaItem = props => {
	const { name, tagline, taglineCTA, image, type } = props.teslaItems

	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.image} />

			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline}
					{taglineCTA && <Text style={styles.subtitleCTA}>{taglineCTA}</Text>}
				</Text>
			</View>
			<View style={styles.buttonsContainer}>
				{type === 'accessories' && (
					<StyledBtn
						type='primary'
						content={'Shop Now'}
						onPress={() => {
							console.warn('Shop Now was pressed')
						}}
					/>
				)}

				{type !== 'accessories' && (
					<>
						<StyledBtn
							type='primary'
							content={type === 'car' ? 'Custom Order' : 'Order Now'}
							onPress={() => {
								console.warn(
									type === 'car'
										? 'Custom Order was pressed'
										: 'Order Now was pressed'
								)
							}}
						/>

						<StyledBtn
							type='secondary'
							content={type === 'car' ? 'Existing Inventory' : 'Learn More'}
							onPress={() => {
								console.warn(
									type === 'car'
										? 'Existing Inventory was pressed'
										: 'Learn More was pressed'
								)
							}}
						/>
					</>
				)}
			</View>
		</View>
	)
}

import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import { TeslaItem } from '../TeslaItem/TeslaItem'

// import { cars } from './carsData'
import cars from './carsData'

import styles from './styles'

const CarsList = () => {
	// const data = [...cars, ...solars]
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <TeslaItem teslaItems={item} />}
				showsVerticalScrollIndicator={false}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
			/>
		</View>
	)
}

export default CarsList

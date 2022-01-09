import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 50,
		zIndex: 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 20,
	},
	logo: {
		width: 100,
		height: 20,
		resizeMode: 'contain',
	},
	menu: {
		width: 55,
		backgroundColor: '#cfd0cf',
		alignItems: 'center',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'transparent',
	},
})

export default styles

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	container: {
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	background: {
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	header: {
		backgroundColor: '#E4F03F',
		borderBottomColor: '#FD016D',

	},
	logo: {
		width: 50,
		height: 50
	},
	settings: {
		width: 35,
		height: 35
	},
	logoSubPage: {
		marginLeft: -52
	},
	logoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logoContainerSettings: {
		marginLeft: 35
	},
	logoTxt: {
		paddingLeft: 10,
		fontFamily: 'Nunito_700Bold',
		fontSize: 18,
		color: '#FD016D'
	},
	boxesContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	boxes1: {
		marginTop: '25%'
	},
	boxes2: {
		marginBottom: '25%'
	},
	box: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 160,
		height: 160,
		borderRadius: 10
	},
	boxTxt: {
		fontFamily: 'Nunito_700Bold',
		fontSize: 18,
		color: '#E4F03F'
	},
	boxRainbow: {
		backgroundColor: '#F80774'
	},
	boxColor: {
		backgroundColor: '#F7891B'
	},
	boxWave: {
		backgroundColor: '#1EDBCE'
	},
	boxOff: {
		backgroundColor: '#9533D6'
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8
	},
	settingsInput: {
		height: 40, 
		backgroundColor: '#E4F03F', 
		borderWidth: 2, 
		borderRadius: 5, 
		margin: 20, 
		paddingVertical: 0,
		paddingHorizontal: 20,
		fontFamily: 'Nunito_700Bold',
		fontSize: 16
	},
	valid: {
		color: '#04b304'
	},
	invalid: {
		color: '#ff0000'
	},
	validBorder: {
		borderColor: '#04b304'
	},
	invalidBorder: {
		borderColor: '#ff0000'
	},
	settingsTxt: { 
		backgroundColor: '#841584', 
		marginHorizontal: 20, 
		fontFamily: 'Nunito_700Bold', 
		fontSize: 14, 
		color: '#ffffff' 
	},
	settingsBtnView: {
		marginHorizontal: 20
	}
});
import React, { Component } from 'react'
import {
	Animated,
	ScrollView,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	Dimensions
} from 'react-native'
import {
	font,
	colors,
	spacing,
	STATUS_BAR_HEIGHT
} from '../configure/style'

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
} = Dimensions.get('window')

class ProvidersPhoneNumberCRUDFormComponent extends Component {
	render() {
		const {
			submitForm,
			values,
			handleChange,
			handleBlur,
			isValid,
			textInput1Ref,
            textInput2Ref,
            textInput3Ref,
            textInput4Ref,
            textInput5Ref,
			scrollViewRef,
			onSubmitEditing_textInput1,
            onSubmitEditing_textInput2,
            onSubmitEditing_textInput3,
            onSubmitEditing_textInput4,
			onSubmitEditing_textInput5,
			keyboardHeight,
		} = this.props
		const {
			containerStyle,
			outerWrapper,
		} = styles


		return (
			<View style={containerStyle}>
				<ScrollView ref={scrollViewRef} contentContainerStyle={[outerWrapper, ]}>
					<Animated.View style={[
						{
							height: 1
						},
						{
							transform: [
								{
									scaleY: keyboardHeight,
								},
							]
						},
						]}/>

				</ScrollView>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	containerStyle: {
		height: SCREEN_HEIGHT,
		flex: 1,
		backgroundColor: colors.background.secondary,
	},
	outerWrapper: {
		paddingTop: STATUS_BAR_HEIGHT,
		marginTop: spacing.lg,
		justifyContent: 'flex-start',
		backgroundColor: colors.background.secondary,
	},

})

export default ProvidersPhoneNumberCRUDFormComponent

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

class ExampleFormComponent extends Component {
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
			imageWrapper,
			headerTextWrapper,
			buttonWrapper,
			imageStyle,
			headerTextStyle,
			fieldWrapper,
			attributeText,
			textInputStyle,
		} = styles


		return (
			<View style={containerStyle}>
				<ScrollView ref={scrollViewRef} contentContainerStyle={[outerWrapper, ]}>
					<View style={imageWrapper}>
						<Image
							source={require('../common/assets/404.png')}
							style={imageStyle} />
					</View>
					<View style={headerTextWrapper}>
						<Text style={headerTextStyle}>
							Let's build a better healthcare system together
						</Text>
					</View>

					<View style={fieldWrapper}>
						<Text style={attributeText}>
							Employer, union, or university
						</Text>
						<TextInput
							ref={textInput1Ref}
							placeholder='I work at...'
							onChangeText={handleChange('sponsor_note')}
							onBlur={handleBlur('sponsor_note')}
							value={values.sponsor_note}
							onSubmitEditing={onSubmitEditing_textInput1}
							returnKeyType='next'
							style={textInputStyle}
							/>
					</View>
					<View style={fieldWrapper}>
						<Text style={attributeText}>
							Health insurance
						</Text>
						<TextInput
							ref={textInput2Ref}
							onChangeText={handleChange('medical_note')}
							onBlur={handleBlur('medical_note')}
							value={values.medical_note}
							onSubmitEditing={onSubmitEditing_textInput2}
							returnKeyType='next'
							style={textInputStyle}
							placeholder='E.g. Cigna OpenAccess or BlueCross BlueSheild Select'
						/>
					</View>
					<View style={fieldWrapper}>
						<Text style={attributeText}>
							Dental
						</Text>
						<TextInput
							ref={textInput3Ref}
							onChangeText={handleChange('dental_note')}
							onBlur={handleBlur('dental_note')}
							value={values.dental_note}
							onSubmitEditing={onSubmitEditing_textInput3}
							returnKeyType='next'
							style={textInputStyle}
							placeholder='E.g. Delta Dental DPPO, Cigna DHMO'
						/>
					</View>
					<View style={fieldWrapper}>
						<Text style={attributeText}>
							Vision
						</Text>
						<TextInput
							ref={textInput4Ref}
							onChangeText={handleChange('vision_note')}
							onBlur={handleBlur('vision_note')}
							value={values.vision_note}
							onSubmitEditing={onSubmitEditing_textInput4}
							returnKeyType='next'
							style={textInputStyle}
							placeholder='E.g. VSP Advantage, EyeMed Choice'
							/>
					</View>
					<View style={fieldWrapper}>
						<Text style={attributeText}>
							Anything else?
						</Text>
						<TextInput
							ref={textInput5Ref}
							onChangeText={handleChange('other_note')}
							onBlur={handleBlur('other_note')}
							value={values.other_note}
							onSubmitEditing={onSubmitEditing_textInput5}
							returnKeyType='send'
							style={textInputStyle}
							placeholder='Let us know!'
							/>
					</View>
					<View style={[buttonWrapper, {opacity: isValid ? 1 : 0.5}]}>
						<Button
							title={'Share'}
							onPress={isValid ? submitForm : () => ({})}
							/>
					</View>
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
	imageWrapper: {
		backgroundColor: 'white',
	},
	headerTextWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	buttonWrapper: {
		padding: spacing.sm,
	},
	imageStyle: {
		paddingTop: spacing.md,
		alignSelf: 'center',
		height: spacing.sm * 10,
		width: spacing.sm * 15,
		marginVertical: spacing.sm,
	},
	headerTextStyle: {
		fontSize: font.lg,
		fontWeight: 'bold',
		textAlign: 'left',
		color: colors.theme.primary,
		marginBottom: spacing.xs,
		paddingBottom: spacing.md,
	},
	fieldWrapper: {

	},
	attributeText: {
		fontSize: font.sm,
		paddingVertical: spacing.xs,
		paddingTop: spacing.md,
		color: colors.text.secondary,
		fontWeight: 'bold',
		paddingLeft: spacing.sm,

	},
	textInputStyle: {
		paddingVertical: spacing.sm,
		fontSize: font.md,
		backgroundColor: 'white',
		paddingHorizontal: spacing.sm,

	},
})

export default ExampleFormComponent

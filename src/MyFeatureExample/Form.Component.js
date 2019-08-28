import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native';

// Needs to be fed Formik props
// (i.e. have the FormikWrapper higher up in the tree
// and pass in {...props})
class FormComponent extends Component {
	fieldRef = {}

	focusNextField = (key) => {
		this.fieldRef[key].focus()
	}

	render() {
		const {
			errorTextStyle,
			textInputStyle,
			outerWrapper,
		} = styles
		const {
			errors,
			handleBlur,
			handleChange,
			customErrorMessage = null,
			submitForm,
			touched,
			values,
		} = this.props

		const {
			focusNextField
		} = this
		return (
			<View style={outerWrapper}>
				{
					customErrorMessage &&
					<Text style={errorTextStyle}>
						{customErrorMessage}
					</Text>

				}
				<TextInput
					id={"email"}
					ref={input => (this.fieldRef[0] = input)}
					name={"email"}
					placeholder="Email"
					value={values.email}
					touched={touched["email"]}
					error={errors["email"]}
					onChangeText={value => {
						let newValue = value.toLowerCase().trim()
						handleChange("email")(newValue)
					}}
					onBlur={handleBlur("email")}
					textContentType={"emailAddress"}
					withRef
					onSubmitEditing={() => {focusNextField(1)}}
					returnKeyType="next"
					autoCapitalize={"none"}
					style={textInputStyle}
					underlineColorAndroid="transparent"
					/>
				<TextInput
					id={"password"}
					ref={input => (this.fieldRef[1] = input)}
					name={"password"}
					textContentType={"password"}
					placeholder="Password"
					value={values.password}
					touched={touched["password"]}
					error={errors["password"]}
					onChangeText={handleChange("password")}
					onBlur={handleBlur("password")}
					secureTextEntry
					withRef
					onSubmitEditing={submitForm}
					returnKeyType={"go"}
					style={textInputStyle}
					/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	outerWrapper: {
	},
	errorTextStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		marginVertical: 7,
	},
	textInputStyle: {
		backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 3,
		paddingHorizontal: 3,
		borderRadius: 16,
		marginVertical: 7,
		paddingHorizontal: 6,
		fontSize: 20,
		...Platform.select({
			ios: {
				paddingVertical: 20,
			},
			android: {
				paddingVertical: 3,
			},
			web: {
				paddingVertical: 5,
			},
		})
	},
})


export default FormComponent

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
import { Content, Form, Item, Input, Label } from 'native-base';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
} = Dimensions.get('window')

class ProvidersPhoneNumberCRUDFormComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneNumber: props.phoneNumber ?props.phoneNumber.phoneNumber : '',
		  description: props.phoneNumber ?props.phoneNumber.description : '',
		};
	  }
	
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
        <ScrollView ref={scrollViewRef} contentContainerStyle={[outerWrapper]}>
          <Content>
            <Form>
              <View>
                <Item floatingLabel>
                  <Label>Phone</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput1Ref}
                    defaultValue={name}
                    onSubmitEditing={onSubmitEditing_textInput1}
                    defaultValue={this.state.phoneNumber}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Description</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput1Ref}
                    defaultValue={name}
                    onSubmitEditing={onSubmitEditing_textInput1}
                    defaultValue={this.state.description}
                  />
                </Item>
              </View>
            </Form>
          </Content>
				</ScrollView>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	containerStyle: {
		height: SCREEN_HEIGHT,
		flex: 1,
		backgroundColor: 'white',
	},
	outerWrapper: {
		backgroundColor: 'white',
	},

})

export default ProvidersPhoneNumberCRUDFormComponent

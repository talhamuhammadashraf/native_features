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
	Dimensions,TouchableOpacity
} from 'react-native'
import * as Metrics from '../configure/style'

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
} = Dimensions.get('window')
import { Content, Form, Item, Input, Label } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { Email_Item, WebsiteItem, Phone_Number } from '../components';
class ProvidersAddressCRUDFormComponent extends Component {
	constructor(props){
		super(props);
		this.state={
			_date_created:props.address ? props.address.date_created : new Date(),
			_date_updated:props.address ? props.address.date_updated : new Date(),
			addressLine :props.address ? props.address.addressLine :'',
			city :props.address ? props.address.city : '',
			state :props.address ? props.address.state : '',
			zipcode :props.address ? props.address.zipcode : '',
		}
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
		console.log(this.props,"props in address")
const {
	addressLine,
	city,
	date_created,
	date_updated,
	description,
	id,
	state,
	zipcode,
} = this.state
		return (
      <View style={containerStyle}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={[styles.contentContainerStyle]}
        >
          <Content>
            <Form>
              <View>
                <Item floatingLabel>
                  <Label>Address</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput1Ref}
                    defaultValue={name}
                    onSubmitEditing={onSubmitEditing_textInput1}
					defaultValue={addressLine}
                  />
                </Item>
              </View>
			  <View>
                <Item floatingLabel>
                  <Label>City</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput2Ref}
                    defaultValue={name}
                    onSubmitEditing={onSubmitEditing_textInput2}
					defaultValue={city}

                  />
                </Item>
              </View>

              <View>
                <Item floatingLabel>
                  <Label>State</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput3Ref}
                    defaultValue={name}
                    onSubmitEditing={onSubmitEditing_textInput3}
					defaultValue={state}

                  />
                </Item>
              </View>
              <View>
                <Item floatingLabel>
                  <Label>Zipcode</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput4Ref}
                    defaultValue={name}
                    onSubmitEditing={onSubmitEditing_textInput4}
					defaultValue={zipcode}
					keyboardType="numeric"

                  />
                </Item>
              </View>
			<View style={{justifyContent:'center',alignItems:'center'}}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state._date_created}
                mode='date'
                placeholder={'Date Created'}
                format='YYYY-MM-DD'
                minDate={new Date()}
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                customStyles={{
                  dateTouchBody: styles.dateTouchBody,
                  placeholderText: { textAlign: 'left', color: 'black' },
                  btnTextConfirm: { color: '#C1CD85' },
                }}
                onDateChange={_date_created => this.setState({ _date_created })}
                showIcon={false}
              />
			                <DatePicker
                style={{ width: 200 }}
                date={this.state._date_updated}
                mode='date'
                placeholder={'Date Updated'}
                format='YYYY-MM-DD'
                minDate={new Date()}
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                customStyles={{
					dateTouchBody: styles.dateTouchBody,
                  placeholderText: { textAlign: 'left', color: 'black' },
                  btnTextConfirm: { color: '#C1CD85' },
                }}
                onDateChange={_date_updated => this.setState({ _date_updated })}
                showIcon={false}
              />
			  </View>
            </Form>
          </Content>
		  <Text style={styles.heading}>Email Addresses</Text>
        <TouchableOpacity style={styles.addAnother}>
          <Text>Add another email here</Text>
          <Image
            source={require('../images/arrow.png')}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>
		  {this.props.emailaddresses_set.map((item,index)=><Email_Item key={index} {...item}/>)}

		  <Text style={styles.heading}>Phone Numbers</Text>
        <TouchableOpacity style={styles.addAnother}>
          <Text>Add another phone number</Text>
          <Image
            source={require('../images/arrow.png')}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>
		  {this.props.phonenumbers_set.map((item,index)=><Phone_Number key={index} {...item}/>)}

		  <Text style={styles.heading}>Websites</Text>
        <TouchableOpacity style={styles.addAnother}>
          <Text>Add another Website...</Text>
          <Image
            source={require('../images/arrow.png')}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>
		  {this.props.websites_set.map((item,index)=><WebsiteItem key={index} {...item}/>)}

        </ScrollView>
      </View>
    );
	}
}
const styles = StyleSheet.create({
	heading:{
		color: '#1350B0',
		fontWeight: 'bold',
		fontSize: 18,
		marginHorizontal: 12,
		marginVertical: 14,
	  },
	  addAnother:{
		backgroundColor: 'white',
		padding: Metrics.scale(15),
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderWidth:Metrics.scale(0.7),
		borderRadius:Metrics.scale(5),
		borderColor:'lightgrey',
		marginHorizontal:Metrics.scale(8)
	  },	
	containerStyle: {
		// height: SCREEN_HEIGHT,
		flex: 1,
	},
	contentContainerStyle:{
        backgroundColor: 'white',
	  },
	  dateTouchBody:{
                    width: Metrics.SCREEN_WIDTH * 0.8,
                    borderWidth: Metrics.scale(1),
                    paddingVertical: Metrics.scale(1),
                    borderColor: 'black',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginVertical: Metrics.spacing.sm,
					alignSelf:'center'
                  }
})

export default ProvidersAddressCRUDFormComponent

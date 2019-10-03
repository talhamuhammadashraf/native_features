// import React, { Component } from 'react'
// import {
// 	Animated,
// 	ScrollView,
// 	Image,
// 	StyleSheet,
// 	Text,
// 	TextInput,
// 	View,
// 	Button,
// 	Dimensions
// } from 'react-native'
// import {
// 	font,
// 	colors,
// 	spacing,
// 	STATUS_BAR_HEIGHT
// } from '../configure/style'

// const {
// 	width: SCREEN_WIDTH,
// 	height: SCREEN_HEIGHT,
// } = Dimensions.get('window')

// class ProvidersProviderCRUDFormComponent extends Component {
// 	render() {
// 		const {
// 			submitForm,
// 			values,
// 			handleChange,
// 			handleBlur,
// 			isValid,
// 			textInput1Ref,
//             textInput2Ref,
//             textInput3Ref,
//             textInput4Ref,
//             textInput5Ref,
// 			scrollViewRef,
// 			onSubmitEditing_textInput1,
//             onSubmitEditing_textInput2,
//             onSubmitEditing_textInput3,
//             onSubmitEditing_textInput4,
// 			onSubmitEditing_textInput5,
// 			keyboardHeight,
// 		} = this.props
// 		const {
// 			containerStyle,
// 			outerWrapper,
// 		} = styles


// 		return (
// 			<View style={containerStyle}>
// 				<ScrollView ref={scrollViewRef} contentContainerStyle={[outerWrapper, ]}>
// 					// Content Goes Here!
// 					// The animated view helps handle the software keyboard blocking content
// 					<Animated.View style={[
// 						{
// 							height: 1
// 						},
// 						{
// 							transform: [
// 								{
// 									scaleY: keyboardHeight,
// 								},
// 							]
// 						},
// 						]}/>

// 				</ScrollView>
// 			</View>
// 		)
// 	}
// }
// const styles = StyleSheet.create({
// 	containerStyle: {
// 		height: SCREEN_HEIGHT,
// 		flex: 1,
// 		backgroundColor: colors.background.secondary,
// 	},
// 	outerWrapper: {
// 		paddingTop: STATUS_BAR_HEIGHT,
// 		marginTop: spacing.lg,
// 		justifyContent: 'flex-start',
// 		backgroundColor: colors.background.secondary,
// 	},

// })

// export default ProvidersProviderCRUDFormComponent

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image
} from 'react-native';
import { ProvderNetworkItem, ProvderAddressItem } from '../components';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Metrics from '../configure/style'
import { Content, Form, Item, Input, Label } from 'native-base';
export default class extends Component {
constructor(props){
  super(props)
  let {
    coverageType,
    existence,
    firstName,
    id,
    lastName,
    name,
    pic,
    providerSpecialty,
    providerSubSpecialty,
    providerTitle,
    onSubmitEditing_textInput1,
    onSubmitEditing_textInput2,
    onSubmitEditing_textInput3,
    onSubmitEditing_textInput4,
    onSubmitEditing_textInput5,
    onSubmitEditing_textInput6,
  } = props.provider
      this.state={
        coverageType,
        existence,
        firstName,
        id,
        lastName,
        name,
        pic,
        providerSpecialty,
        providerSubSpecialty,
        providerTitle,
        onSubmitEditing_textInput1,
        onSubmitEditing_textInput2,
        onSubmitEditing_textInput3,
        onSubmitEditing_textInput4,
        onSubmitEditing_textInput5,
        onSubmitEditing_textInput6,    
    }}
  componentDidMount() {
    this.getPermissionAsync();
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });


    if (!result.cancelled) {
      this.setState({ pic: result.uri });
    }
  };
  getPermissionAsync = async () => {
    if (Platform.OS == 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  render() {
    const {
      coverageType,
      existence,
      firstName,
      id,
      lastName,
      name,
      pic,
      providerSpecialty,
      providerSubSpecialty,
      providerTitle,
      onSubmitEditing_textInput1,
      onSubmitEditing_textInput2,
      onSubmitEditing_textInput3,
      onSubmitEditing_textInput4,
      onSubmitEditing_textInput5,
      onSubmitEditing_textInput6,
      textInput1Ref,
      textInput2Ref,
      textInput3Ref,
      textInput4Ref,
      textInput5Ref,
      scrollViewRef,

    } = this.props.provider;
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
      >
        <Content>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={this._pickImage}
          >
            <Image
              source={{ uri: this.state.pic }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
          <Form>
            {existence === 'H' ? (
              <View>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput1Ref}
                    defaultValue={firstName}
                    onSubmitEditing={onSubmitEditing_textInput1}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput1Ref}
                    defaultValue={lastName}
                    onSubmitEditing={onSubmitEditing_textInput2}
                  />
                </Item>
              </View>
            ) : existence === 'F' ? (
              <View>
                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input
                    returnKeyType='next'
                    returnKeyLabel='Next'
                    ref={textInput1Ref}
                    defaultValue={name}
                    onSubmitEditing={onSubmitEditing_textInput1}
                  />
                </Item>
              </View>
            ) : (
              <View />
            )}
            <Item floatingLabel>
              <Label>Title</Label>
              <Input
                defaultValue={providerTitle}
                onSubmitEditing={
                  existence === 'H'
                    ? onSubmitEditing_textInput3
                    : onSubmitEditing_textInput4
                }
                returnKeyType='next'
                returnKeyLabel='Next'
                ref={existence === 'H' ? textInput3Ref : textInput2Ref}
              />
            </Item>
            <Item floatingLabel>
              <Label>Provider Specialty</Label>
              <Input
                defaultValue={providerSpecialty}
                onSubmitEditing={
                  existence === 'H'
                    ? onSubmitEditing_textInput4
                    : onSubmitEditing_textInput5
                }
                returnKeyType='next'
                returnKeyLabel='Next'
                ref={existence === 'H' ? textInput4Ref : textInput3Ref}
              />
            </Item>
            <Item floatingLabel>
              <Label>Provider Subspecialty</Label>
              <Input
                defaultValue={providerSubSpecialty}
                onSubmitEditing={
                  existence === 'H'
                    ? onSubmitEditing_textInput5
                    : onSubmitEditing_textInput6
                }
                returnKeyType='next'
                returnKeyLabel='Next'
                ref={existence === 'H' ? textInput5Ref : textInput4Ref}
              />
            </Item>
          </Form>
        </Content>
        <Text style={styles.heading}>Provider Networks</Text>
        <TouchableOpacity style={styles.addAnother} >
          <Text>Add another provider networks</Text>
          <Image
            source={require('../images/arrow.png')}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>
        {this.props.providernetworks_set.map((item, index) => (
          <ProvderNetworkItem {...item} key={index} />
        ))}
        <Text style={styles.heading}>Provider Addresses</Text>
        <TouchableOpacity style={styles.addAnother} onPress={()=>this.props.navigation.navigate('editAddress')}>
          <Text>Add another provider address</Text>
          <Image
            source={require('../images/arrow.png')}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>
        {this.props.addresses_set.map((item, index) => (
          <ProvderAddressItem
            {...item}
            key={index}
            onPressEdit={()=>this.props.onPressEditProviderNetwork(item)}
            onPressDelete={()=>this.props.onPressDeleteProviderNetwork(item)}
          />
        ))}
      </ScrollView>
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
    imageContainer:{
        height: 100,
        borderWidth:2.5,
        borderColor:'#4D9DD2',
        width: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4D9DD2'
      },
      scroll:{
        flex: 1,
      },
      contentContainerStyle:{
        backgroundColor: 'white',
      }
})
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
import { Header } from '../../components';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Content, Form, Item, Input, Label } from 'native-base';
export default class extends Component {
    state={
        uri:"https://img.icons8.com/carbon-copy/2x/user.png"
    }
  static navigationOptions = ({ navigation }) => ({
    header: <Header Title='Edit Provider' />,
  });
  componentDidMount() {
    this.getPermissionAsync();
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ uri: result.uri });
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
    console.log(this.state, 'state');
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={this._pickImage}
        >
          <Image source={{uri:this.state.uri}} style={{
              height:100,
              width:100,
              borderRadius:50
          }}/>
        </TouchableOpacity>
        <Content>
        <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
            //    onChangeText={}

               />
            </Item>
        </Form>
        </Content>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
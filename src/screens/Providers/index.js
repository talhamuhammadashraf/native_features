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
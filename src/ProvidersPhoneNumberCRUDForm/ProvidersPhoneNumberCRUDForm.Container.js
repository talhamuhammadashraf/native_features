import React, { Component } from 'react'
import { Alert } from 'react-native'
import ProvidersPhoneNumberCRUDFormComposition from './ProvidersPhoneNumberCRUDForm.Composition'
import {validateForm} from './validate'
import { Header } from '../components'



let PHONENUMBER_SAMPLE = {
  description: "office",
  phoneNumber: "7037570311",
  id: 277370
}

class ProvidersPhoneNumberCRUDFormContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        Title='Edit Phone Number'
        onPressSave={() => Alert.alert('onPressSave')}
        onPressCancel={() => navigation.goBack()}
      />
    ),
  });

  render() {
    return(
      <ProvidersPhoneNumberCRUDFormComposition
        validate={validateForm}
        initialValues={PHONENUMBER_SAMPLE}
        phoneNumber={this.props.navigation.state.params}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersPhoneNumberCRUDFormContainer
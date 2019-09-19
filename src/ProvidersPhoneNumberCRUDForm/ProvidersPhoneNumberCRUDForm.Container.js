import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import ProvidersPhoneNumberCRUDFormComposition from './ProvidersPhoneNumberCRUDForm.Composition'
import {validateForm} from './validate'



let PHONENUMBER_SAMPLE = {
  description: "office",
  phoneNumber: "7037570311",
  id: 277370
}

class ProvidersPhoneNumberCRUDFormContainer extends Component {
  render() {
    return(
      <ProvidersPhoneNumberCRUDFormComposition
        validate={validateForm}
        initialValues={PHONENUMBER_SAMPLE}
        phoneNumber={PHONENUMBER_SAMPLE}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersPhoneNumberCRUDFormContainer
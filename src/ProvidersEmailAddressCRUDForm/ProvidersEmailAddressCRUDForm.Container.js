import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import ProvidersEmailAddressCRUDFormComposition from './ProvidersEmailAddressCRUDForm.Composition'
import {validateForm} from './validate'


let EMAILADDRESS_SAMPLE = [
  {
    description: "office",
    email: "bradleysevilladmd@gmail .com",
    id: 13336
  }
]

class ProvidersEmailAddressCRUDFormContainer extends Component {
  render() {
    return(
      <ProvidersEmailAddressCRUDFormComposition
        validate={validateForm}
        initialValues={EMAILADDRESS_SAMPLE}
        emailAddress={EMAILADDRESS_SAMPLE}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersEmailAddressCRUDFormContainer
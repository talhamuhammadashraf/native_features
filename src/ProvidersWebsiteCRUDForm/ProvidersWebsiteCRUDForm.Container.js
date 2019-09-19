import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import ProvidersWebsiteCRUDFormComposition from './ProvidersWebsiteCRUDForm.Composition'
import {validateForm} from './validate'



let WEBSITE_SAMPLE =   {
  description: "homepage",
  website_url: "http://www.aeyecc.net",
  id: 16797
}

class ProvidersWebsiteCRUDFormContainer extends Component {
  render() {
    return(
      <ProvidersWebsiteCRUDFormComposition
        validate={validateForm}
        initialValues={WEBSITE_SAMPLE}
        website={WEBSITE_SAMPLE}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersWebsiteCRUDFormContainer
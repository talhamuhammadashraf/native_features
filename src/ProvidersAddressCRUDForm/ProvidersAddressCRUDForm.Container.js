import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import ProvidersAddressCRUDFormComposition from './ProvidersAddressCRUDForm.Composition'
import {validateForm} from './validate'


let ADDRESS_SAMPLE = {
    description: "office",
    addressLine: "1026 16th Street NW 105",
    city: "Washington",
    date_created: "2019-06-11T02:39:31.314000Z",
    date_updated: "2019-06-11T04:57:48.796000Z",
    state: "DC",
    zipcode: "20036",
    id: "00003e88-0aa1-46f3-a681-7baeee7697b5",
}

let EMAILADDRESSES_SAMPLE = [
  {
    description: "office",
    email: "bradleysevilladmd@gmail .com",
    id: 13336
  },
  {
    description: "office",
    email: "bradleysevilladmd@gmail .com",
    id: 13337
  },
  {
    description: "office",
    email: "centervilledentalcare@yahoo,com",
    id: 13338
  },
]

let PHONENUMBERS_SAMPLE = [
  {
    description: "office",
    phoneNumber: "7037570311",
    id: 277370
  },
  {
    description: "office",
    phoneNumber: "2027760901",
    id: 277371
  },
  {
    description: "office",
    phoneNumber: "2025545011",
    id: 277372
  },
]

let WEBSITES_SAMPLE = [
  {
    description: "homepage",
    website_url: "http://www.aeyecc.net",
    id: 16797
  },
  {
    description: "homepage",
    website_url: "http://www.avisualaffair.info",
    id: 16798
  },
  {
    description: "homepage",
    website_url: "http://www.capitoleyes.org",
    id: 16799
  },
]



class ProvidersAddressCRUDFormContainer extends Component {
  render() {
    return(
      <ProvidersAddressCRUDFormComposition
        validate={validateForm}
        initialValues={ADDRESS_SAMPLE}
        address={ADDRESS_SAMPLE}
        onPressEditEmailAddress={(item)=> Alert.alert(item)}
        onPressDeleteEmailAddress={(item)=> Alert.alert(item)}
        onPressCreateEmailAddress={(item)=> Alert.alert(item)}
        onPressEditPhoneNumber={(item)=> Alert.alert(item)}
        onPressDeletePhoneNumber={(item)=> Alert.alert(item)}
        onPressCreatePhoneNumber={(item)=> Alert.alert(item)}
        onPressEditWebsite={(item)=> Alert.alert(item)}
        onPressDeleteWebsite={(item)=> Alert.alert(item)}
        onPressCreateWebsite={(item)=> Alert.alert(item)}
        emailaddresses_set={EMAILADDRESSES_SAMPLE}
        phonenumbers_set={PHONENUMBERS_SAMPLE}
        websites_set={WEBSITES_SAMPLE}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersAddressCRUDFormContainer
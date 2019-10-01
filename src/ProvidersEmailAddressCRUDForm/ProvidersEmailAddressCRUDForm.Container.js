import React, { Component } from 'react'
import { Alert } from 'react-native'
import ProvidersEmailAddressCRUDFormComposition from './ProvidersEmailAddressCRUDForm.Composition'
import {validateForm} from './validate'
import { Header } from '../components'


let EMAILADDRESS_SAMPLE = [
  {
    description: "office",
    email: "bradleysevilladmd@gmail .com",
    id: 13336
  }
]

class ProvidersEmailAddressCRUDFormContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        Title='Edit Email'
        onPressSave={() => Alert.alert('onPressSave')}
        onPressCancel={() => navigation.goBack()}
      />
    ),
  });

  render() {
    console.log(this.props,"in email container")
    return(
      <ProvidersEmailAddressCRUDFormComposition
        validate={validateForm}
        initialValues={EMAILADDRESS_SAMPLE}
        emailAddress={this.props.navigation.state.params}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersEmailAddressCRUDFormContainer
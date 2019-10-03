import React, { Component } from 'react'
import { Alert } from 'react-native'
import ProvidersWebsiteCRUDFormComposition from './ProvidersWebsiteCRUDForm.Composition'
import {validateForm} from './validate'
import { Header } from '../components'



let WEBSITE_SAMPLE =   {
  description: "homepage",
  website_url: "http://www.aeyecc.net",
  id: 16797
}

class ProvidersWebsiteCRUDFormContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        Title='Edit Website'
        onPressSave={() => Alert.alert('onPressSave')}
        onPressCancel={() => navigation.goBack()}
      />
    ),
  });

  render() {
    return(
      <ProvidersWebsiteCRUDFormComposition
        validate={validateForm}
        initialValues={WEBSITE_SAMPLE}
        website={this.props.navigation.state.params}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersWebsiteCRUDFormContainer
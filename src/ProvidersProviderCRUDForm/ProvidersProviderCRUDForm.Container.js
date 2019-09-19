import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
// import { goBack } from 'routing/duck/'
// import { searchOperations as ops } from '../../duck/'
import ProvidersProviderCRUDFormComposition from './ProvidersProviderCRUDForm.Composition'
import {validateForm} from './validate'

// Note: Daneyl, for Provider objects they will have either:
// A. "firstName" + "lastName" (for humans) (existence="H")
// B. "name" (for facilities) (existence = "F")
// Need to include render logic to only show the relevant forms

let PROVIDER_SAMPLE = {
  id: "2b7519d0-a96d-4a42-b8a9-634e806eb760",
  firstName: null,
  lastName: null,
  name: "Hand And Upper Extremity Rehab",
  providerTitle: null,
  coverageType: "M",
  providerSpecialty: "Medical Center",
  providerSubSpecialty: null,
  existence: "F",
  pic: "http://localhost:8000/media/providers/pic/none/default.png"
}

let PROVIDERNETWORKS_SAMPLE = [
  {
    id: "03b00814-a342-41de-b5de-68df6e106fc8",
    name: "Aetna OpenChoice PPO",
    coverageType: "M",
    networkType: "PPO",
    region: "Greater Washington DC",
    description: null,
    directory_url: "https://www.aetna.com/individuals-families/find-a-doctor.html",
    public: true,
    generic: true,
    distributionType: "Commercial",
    date_created: "2018-11-14T09:09:47.404000Z",
    date_updated: "2018-11-14T09:09:47.404000Z",
    owner: "adcbc830-c46c-4fe3-b39f-6053468e7a3d",
  },
  {
    id: "08a6e970-5757-4f3e-b756-93c9c07f8cef",
    name: "Cigna Connect",
    coverageType: "M",
    networkType: "EPO",
    region: "VA",
    description: null,
    directory_url: "https://ifphcpdir.cigna.com/web/public/ifpproviders",
    public: true,
    generic: true,
    distributionType: "Commercial",
    date_created: "2018-12-08T02:00:17.256000Z",
    date_updated: "2018-12-08T02:00:17.256000Z",
    owner: "5fe8ef4f-1b23-4a9c-9f6a-51212a2807d1",
  }
]


let ADDRESSES_SAMPLE = [
  {
    description: "office",
    addressLine: "1026 16th Street NW 105",
    city: "Washington",
    date_created: "2019-06-11T02:39:31.314000Z",
    date_updated: "2019-06-11T04:57:48.796000Z",
    state: "DC",
    zipcode: "20036",
    id: "00003e88-0aa1-46f3-a681-7baeee7697b5",
  },
  {
    description: "office",
    addressLine: "500 Grove Street",
    city: "Herndon",
    date_created: "2019-06-11T02:18:19.414000Z",
    date_updated: "2019-06-11T05:46:46.528000Z",
    state: "VA",
    zipcode: "20170",
    id: "00145433-7a97-4900-8915-db0077a721c8",
  },
]


class ProvidersProviderCRUDFormContainer extends Component {
  render() {
    return(
      <ProvidersProviderCRUDFormComposition
        validate={validateForm}
        initialValues={PROVIDER_SAMPLE}
        provider = {PROVIDER_SAMPLE}
        providernetworks_set={PROVIDERNETWORKS_SAMPLE}
        addresses_set={ADDRESSES_SAMPLE}
        onPressCreateAddress={(item)=> Alert.alert(item)}
        onPressEditAddress={(item)=> Alert.alert(item)}
        onPressDeleteAddress={(item)=> Alert.alert(item)}
        onPressCreateProviderNetwork={(item)=> Alert.alert(item)}
        onPressEditProviderNetwork={(item)=> Alert.alert(item)}
        onPressDeleteProviderNetwork={(item)=> Alert.alert(item)}
        onPressSave = {()=>Alert.alert('onPressSave')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={()=>Alert.alert('onSubmit')}
        />
    )
  }
}

export default ProvidersProviderCRUDFormContainer
import React from 'react';
import { View, Alert, } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import ProvidersEmailAddressCRUDFormComposition from './ProvidersEmailAddressCRUDForm.Composition'

const CenteredView = ({ children }) => (
  <View style={style}>
    {children}
  </View>
)

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};


export default storiesOf(
  'Example Form',
  module
).add(
  'with no results',
  () =>
    <ProvidersEmailAddressCRUDFormComposition
      onPressBack={() => Alert.alert('onPressBack')}
      onPressCancel={() => Alert.alert('onPressCancel')}
      onSubmit={values => Alert.alert('onSubmit')}
    />


)

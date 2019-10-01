import React from 'react';
import { View, Alert } from 'react-native';
import ProvidersProviderCRUDFormComposition from './ProvidersProviderCRUDForm.Composition';

export default () => (
  <ProvidersProviderCRUDFormComposition
    onPressBack={() => Alert.alert('onPressBack')}
    onPressCancel={() => Alert.alert('onPressCancel')}
    onSubmit={values => Alert.alert('onSubmit')}
  />
);

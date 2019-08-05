import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyFeatureExampleContainer from './src/MyFeatureExample/MyFeatureExample.Container'
import ProfileWidgetContainer from './src/ProfileWidget/ProfileWidget.Container'

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileWidgetContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

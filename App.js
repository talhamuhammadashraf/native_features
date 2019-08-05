import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyFeatureExampleContainer from './src/MyFeatureExample/MyFeatureExample.Container'

// Entry point to the simulator.
// Change this to point to the new feature when you are ready
// to start

export default function App() {
  return (
    <View style={styles.container}>
      <MyFeatureExampleContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

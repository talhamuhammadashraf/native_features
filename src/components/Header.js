import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import * as Metrics from '../configure/style';
export default ({ Title, onPressRight, onPressLeft,validated }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#4D9DD2' }}>
    <View style={styles.container}>
      <Text style={{color:'#f4f3f2'}}>cancel</Text>
      <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>{Title}</Text>
      <Text style={{color:validated ? '#f4f3f2' : "#85b5d3"}}>save</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    height: Metrics.STATUS_BAR_HEIGHT,
    backgroundColor: '#4D9DD2',
    width: Metrics.SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.spacing.md,
    alignItems: 'center',
  },
});

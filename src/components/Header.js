import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Metrics from '../configure/style';
export default ({ Title, onPressSave, onPressCancel, validated }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#4D9DD2' }}>
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressCancel}>
        <Text style={{ color: '#f4f3f2' }}>cancel</Text>
      </TouchableOpacity>

      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>
        {Title}
      </Text>
      <TouchableOpacity onPress={onPressSave}>
        <Text style={{ color: validated ? '#f4f3f2' : '#85b5d3' }}>save</Text>
      </TouchableOpacity>
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

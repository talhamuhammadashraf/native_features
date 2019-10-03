import React from 'react';
import {
  View,
  TouchableOpacity,
  Text as TextRN,
  Linking,
  StyleSheet,
} from 'react-native';
import * as Metrics from '../configure/style';
const openURL = googleUrl => {
  return Linking.canOpenURL(googleUrl).then(supported => {
    if (supported) {
      Linking.openURL(googleUrl);
    }
  });
};
const Text = ({ children, style }) => (
  <TextRN
    style={{
      color: 'black',
      fontSize: Metrics.scale(12),
      // marginHorizontal:Metrics.scale(5),
      marginVertical: Metrics.scale(3),
      ...style,
    }}
  >
    {children}
  </TextRN>
);
export default ({
  onPressEdit,
  onPressDelete,
  phoneNumber,
  description,
  id,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.blueText}>
        {description} : {phoneNumber}
      </Text>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          marginVertical: Metrics.scale(7.5),
          justifyContent:'space-between'
        }}
      >
        <TouchableOpacity
        onPress={onPressEdit}
          style={{
            width: '47.5%',
            paddingVertical: Metrics.spacing.sm,
            borderRadius: Metrics.scale(5),
            borderWidth:Metrics.scale(0.8),
            borderColor: '#4D9DD2',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={onPressDelete}
          style={{
            width: '47.5%',
            justifyContent:'center',
            alignItems:'center',
            paddingVertical: Metrics.spacing.sm,
            borderRadius: Metrics.scale(5),
            borderColor: '#4D9DD2',
            borderWidth:Metrics.scale(0.8),

          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blueText: {
    color: '#1350B0',
    fontSize: Metrics.scale(17),
    fontStyle: 'italic',
  },
  container: {
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 12,
    alignSelf: 'center',
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
    borderColor: 'lightgrey',
    borderWidth: Metrics.scale(0.7),
    marginVertical: Metrics.spacing.md,
  },
});

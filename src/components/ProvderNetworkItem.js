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
  onPressCancel,
  id,
  name,
  coverageType,
  networkType,
  region,
  description,
  directory_url,
  generic,
  distributionType,
  date_created,
  date_updated,
  owner,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.blueText}>{name}</Text>
      {/* <Text>{coverageType}</Text>
        <Text>{networkType}</Text> */}
      <Text style={styles.blueText}>{region}</Text>
      <Text>{description}</Text>
      <TouchableOpacity onPress={() => openURL(directory_url)}>
        <Text>{directory_url}</Text>
      </TouchableOpacity>
      <Text>{generic}</Text>
      <Text>{distributionType}</Text>
      <Text style={{ fontStyle: 'italic' }}>Date Created : {date_created}</Text>
      <Text style={{ fontStyle: 'italic' }}>Date Updated : {date_updated}</Text>
      {/* <Text>{owner}</Text> */}
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

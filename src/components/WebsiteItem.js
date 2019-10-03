import React from 'react';
import {
  View,
  TouchableOpacity,
  Text as TextRN,
  Linking,
  StyleSheet,
  Alert
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
  description,
  id,
  website_url
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.blueText}>
        {description} : {website_url}
      </Text>
      <View
        style={styles.ButtonContainer}
      >
        <TouchableOpacity
        onPress={onPressEdit}
          style={styles.button}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={          ()=>{Alert.alert(
          'Are You Sure',
          'You wan to delete this item',
          [
            {text: 'Yes', onPress:onPressDelete},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          {cancelable: true},
        )}
}
          style={styles.button}
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
  button: {
    width: "47.5%",
    paddingVertical: Metrics.spacing.sm,
    borderRadius: Metrics.scale(5),
    borderWidth: Metrics.scale(0.8),
    borderColor: "#4D9DD2",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    elevation: 15,
    borderRadius: 12,
    alignSelf: "center",
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.md,
    borderColor: "lightgrey",
    borderWidth: Metrics.scale(0.7),
    marginVertical: Metrics.spacing.md
  },
  ButtonContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: Metrics.scale(7.5),
    justifyContent: "space-between"
  }

});

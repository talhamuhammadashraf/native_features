import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyFeatureExampleContainer from './src/MyFeatureExample/MyFeatureExample.Container'
import CommentsListContainer from './src/CommentsList/CommentsList.Container'
import CommentsComposeEdit from './src/CommentsComposeEdit/CommentsComposeEdit.Container'

export default function App() {
  return (
    <View style={styles.container}>
      <CommentsComposeEdit/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

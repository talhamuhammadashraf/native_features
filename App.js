import React from 'react';
import {View} from 'react-native';
import Navigation from './navigation'
import {createAppContainer} from 'react-navigation'
// export default function App() {
//   return (
// //     <View style={styles.container}>
// //       <MyFeatureExampleContainer/>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// // });

// export default StoryBookUI

const AppContainer = createAppContainer(Navigation)
export default ()=><View style={{flex:1}}><AppContainer/></View>
import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
// This is where the "component" design begins!

const SearchFilterSponsorsComponent = props => {
    const {
        outerWrapper,

    } = styles
    return(
        <View
            style={outerWrapper}>
            <Text>Start</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        justifyContent: 'center',
    },

})

export default SearchFilterSponsorsComponent

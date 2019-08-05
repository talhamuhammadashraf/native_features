import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesomeIcon from '../common/components/HybridFontAwesome'

// For Icons we use FontAwesomeIcon.
// See the gallery here for the free tier options:
// https://fontawesome.com/icons?d=gallery
// Note, we use a helper component from the "common" folder

const IconComponent = props => {
    const { outerWrapper } = styles
    return(
        <View style={outerWrapper}>
            <FontAwesomeIcon
                size={100}
                icon='check-circle'
                color='#89E09A'
                />
        </View>
    )
}

styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
    },
    textStyle: {
        flex: 1,
    }
})

export default IconComponent

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesomeIcon from '../common/components/HybridFontAwesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// For Icons we use FontAwesomeIcon.
// See the gallery here for the free tier options:
// https://fontawesome.com/icons?d=gallery
// Note, we use a helper component from the "common" folder

const IconComponent = props => {
    const { outerWrapper } = styles
    return(
        <View style={outerWrapper}>
        <Text>Here is an example implementation of FontAwesome</Text>
            <FontAwesomeIcon
                icon={ faCoffee }
                color='purple'
                size={100}
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

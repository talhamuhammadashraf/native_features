import React from 'react'
import { View, Button, StyleSheet } from 'react-native'


const SampleButtonComponent = props => {
    const { sendMessage } = props
    const { outerWrapper, } = styles
    return(
        <View
            style={outerWrapper}>
            <Button
                title={'Press me to call sendMessage callback'}
                onPress={sendMessage}
                />
        </View>
    )
}

styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
    },
})

export default SampleButtonComponent

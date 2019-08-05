import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


// Note: the message is passed in through "props.message"
// rather than being hard coded in

const MessageComponent = props => {
    const { message } = props
    const { outerWrapper, textStyle } = styles
    return(
        <View
            style={outerWrapper}>
            <Text
                style={textStyle}>
                {message}
            </Text>
        </View>
    )
}

styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
    },
    textStyle: {
        flex: 1,
        color: 'white',
    }
})

export default MessageComponent

import React from 'react'
import { View, Button, StyleSheet } from 'react-native'


const SubmitButtonComponent = props => {
    const { sendMessage } = props
    const { outerWrapper, } = styles
    return(
        <View
            style={outerWrapper}>
            <Button
                title={'My custom button'}
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

export default SubmitButtonComponent

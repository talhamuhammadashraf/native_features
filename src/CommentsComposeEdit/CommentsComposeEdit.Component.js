import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import FormComponent from './Form.Component'

// This is where the "component" design begins!

const CommentsComposeEditComponent = props => {
    const {
        outerWrapper,
        innerWrapper
    } = styles
    return(
        <View
            style={outerWrapper}>
            <View
                style={innerWrapper}>
                <Text>Render a custom Formik Form (use our helper components)</Text>
                <FormComponent {...props}/>
            </View>
            <View>
                <Text>Replace this screen with your code. Use the ".Composition" file for methods / state as helpful.</Text>
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default CommentsComposeEditComponent

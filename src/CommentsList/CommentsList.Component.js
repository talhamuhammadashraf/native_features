import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconComponent from './Icon.Component'
import AnimationExampleComponent from './AnimationExample'
// This is where the "component" design begins!

const CommentsListComponent = props => {
    const {
        outerWrapper,
        innerWrapper
    } = styles
    return(
        <View
            style={outerWrapper}>

            <View
                style={innerWrapper}>
                <Text>Render a custom component:</Text>
                <IconComponent {...props}/>
            </View>
            <View
                style={innerWrapper}>
                <Text>Render a custom Lottie animation:</Text>
                <AnimationExampleComponent {...props}/>
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

export default CommentsListComponent

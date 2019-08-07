import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Lottie from 'lottie-react-native'


export const AnimationExampleComponent = props => {
    const { outerWrapper, lottieStyle } = styles
    return(
        <View style={outerWrapper}>
            <Lottie
                ref={animation => {
                    this.animation = animation;
                }}
                style={lottieStyle}
                loop={false}
                autoPlay={true}
                source={require('./thumbsup.json')}
            />
        </View>

    )
}
export const styles = StyleSheet.create({
    outerWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottieStyle: {
        width: 250,
        height: 250,
    }
})

export default AnimationExampleComponent
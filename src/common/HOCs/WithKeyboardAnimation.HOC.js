import React from 'react'
import { Animated, Keyboard, Platform } from 'react-native'

export function WithKeyboardAnimationHOC(OriginalComponent) {
    return class ConnectedComponent extends React.Component {
        constructor(props) {
            super(props)
            this.keyboardHeight = new Animated.Value(0)
            this.navBarOpacity = new Animated.Value(1)
            this.state={
                keyboardIsDisplayed: false,
            }
        }

        componentDidMount() {
            let showListenerName = (Platform.OS === 'ios') ? 'keyboardWillShow' : 'keyboardDidShow'
            let hideListenerName = (Platform.OS === 'ios') ? 'keyboardWillHide' : 'keyboardDidHide'
            this.keyboardWillShowSub = Keyboard.addListener(showListenerName, this.keyboardWillShow)
            this.keyboardWillHideSub = Keyboard.addListener(hideListenerName, this.keyboardWillHide)
        }

        keyboardWillShow = event => {
            Animated.parallel([
                Animated.timing(this.keyboardHeight, {
                    duration: 250,
                    toValue: -event.endCoordinates.height,
                    useNativeDriver: true,
                }),
                Animated.timing(this.navBarOpacity, {
                    duration: 250,
                    toValue: 0,
                    useNativeDriver: true,
                }),
            ]).start()
            this.setState({
                keyboardIsDisplayed: true,
            })
        }

        keyboardWillHide = () => {
            Animated.parallel([
                Animated.timing(this.keyboardHeight, {
                    duration: 250,
                    toValue: 0,
                    useNativeDriver: true,
                }),
                Animated.timing(this.navBarOpacity, {
                    duration: 250,
                    toValue: 1,
                    useNativeDriver: true,
                }),
            ]).start()
            this.setState({keyboardIsDisplayed: false})
        }
        componentWillUnmount() {
            this.keyboardWillShowSub.remove()
            this.keyboardWillHideSub.remove()
        }

        render() {
            const { navBarOpacity, keyboardHeight } = this
            return (
                <OriginalComponent
                    {...this.props}
                    {...this.state}
                    navBarOpacity={navBarOpacity}
                    keyboardHeight={keyboardHeight}
                />
            )
        }
    };
}

export default WithKeyboardAnimationHOC
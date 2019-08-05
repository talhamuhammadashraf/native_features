import React, { Component } from 'react'
import ProfileWidgetComponent from './ProfileWidget.Component'
import { View, Animated, Text, StyleSheet } from 'react-native'

class ProfileWidgetComposition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleKey: 'value',
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }
    componentWillUnmount(){

    }

    render() {
        return (
            <ProfileWidgetComponent
                {...this.props}
                />
        )
    }
}

export default ProfileWidgetComposition
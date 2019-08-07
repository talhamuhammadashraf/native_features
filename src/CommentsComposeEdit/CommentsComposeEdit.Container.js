import React, { Component } from 'react'
import { Alert } from 'react-native'
import CommentsComposeEditComposition from './CommentsComposeEdit.Composition'

// The Container is where our dev team will eventually
// "plug-and-play" the business logic into the components
// you create. FYI, our team uses Redux for this (but outside
// the scope of this contract)

// The Container is the highest level entry point for the set
// of components (i.e. will be in the App.js)

class CommentsComposeEditContainer extends Component {
    render() {
        return (
            <CommentsComposeEditComposition
                message={'Hey this is an example placeholder for a message our dev team to plug into later'}
                title={'this is a sample value'}
                sendMessage={()=> Alert.alert('Hey, this is a placeholder callback for our dev team to plug into later.')}
                onSubmit={values=>Alert.alert(values.sampleinput)}
                />
        )
    }
}
export default CommentsComposeEditContainer
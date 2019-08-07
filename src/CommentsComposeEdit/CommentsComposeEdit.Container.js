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

                onSubmit={values=>Alert.alert('onSubmit')}
                onPressClose={values=>Alert.alert('onSubmit')}
                displayName={'MedStar Urgent Care at Tysons Corner and Galleria'}
                comment={
                    {
                        id: '91fa71c2-f09a-4cea-bb9a-c2b9d888d23e',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: 'b742e5dc-c3ae-4f20-aec5-5c5de0eb1077',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my subcomment response'
                            },
                            {
                                id: '5a300384-196a-426b-ad2f-40060baf587d',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another response'
                            },
                        ]
                    }
                }
                />
        )
    }
}
export default CommentsComposeEditContainer
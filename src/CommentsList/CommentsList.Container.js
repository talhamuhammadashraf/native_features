import React, { Component } from 'react'
import { Alert } from 'react-native'
import CommentsListComposition from './CommentsList.Composition'

// The Container is where our dev team will eventually
// "plug-and-play" the business logic into the components
// you create. FYI, our team uses Redux for this (but outside
// the scope of this contract)

// The Container is the highest level entry point for the set
// of components (i.e. will be in the App.js)

class CommentsListContainer extends Component {
    render() {
        return (
            <CommentsListComposition
                onPressCompose={()=>Alert.alert('onPressCompose')}
                onPressEditComment={()=>Alert.alert('onPressEditComment')}
                onPressDeleteComment={()=>Alert.alert('onPressDeleteComment')}
                onPressShowMore={()=>Alert.alert('onPressShowMore')}
                comments={[
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
                    },
                    {
                        id: '7564b7ed-8386-4e44-a96c-47553ef9aaac',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my second comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: []
                    },
                    {
                        id: '087ae004-aa63-4839-b66d-db5492d4a46d',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my third comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: '0de8bf64-76fe-4f18-9907-d83de270197d',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my third subcomment response'
                            },
                            {
                                id: 'd0bb1809-6014-48a6-934f-10be5a4e5171',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another third comment response'
                            },
                        ]
                    },
                    {
                        id: 'xxx',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my sample #4. It shouldnt be revelated right away. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: '1d76aef0-3284-4466-aeb6-f8fc054a667c',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my subcomment #4 response'
                            },
                            {
                                id: '2ed7532c-3716-40fd-87a8-f050edadb97d',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another #4 response'
                            },
                        ]
                    },
                    {
                        id: '866acf4f-2134-4eb9-8e5e-33251c738ad5',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my sample #4. It shouldnt be revelated right away. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: 'be0622b6-31e1-4849-9dd3-05f3f589c49f',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my subcomment #4 response'
                            },
                            {
                                id: '19f248e3-076b-444f-a8e0-8c0967b36b8d',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another #4 response'
                            },
                        ]
                    },
                    {
                        id: 'ebf5e2d0-b69d-4a57-9926-b40c3712b4de',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my sample #4. It shouldnt be revelated right away. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: '46eb5c5f-42af-4d1e-a1bb-d61562daae78',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my subcomment #4 response'
                            },
                            {
                                id: 'bc37a792-f34c-48dd-aefe-064e1aeb7f8b',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another #4 response'
                            },
                        ]
                    },
                    {
                        id: 'b8bd6ec3-fbf9-4d39-ba6a-3b028d1b6ad8',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my sample #4. It shouldnt be revelated right away. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: '8abb0aab-97b1-484e-a0ce-ed5f6f9aa100',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my subcomment #4 response'
                            },
                            {
                                id: 'e2b236a4-2fcc-4519-8806-6dcbaa3b9eff',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another #4 response'
                            },
                        ]
                    },
                    {
                        id: '0f4a7336-3b9c-45f9-9da4-87c9c0fae8e5',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my sample #4. It shouldnt be revelated right away. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: 'acf2f8b9-1bfc-4da3-b896-eb4536a728b3',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my subcomment #4 response'
                            },
                            {
                                id: 'c4671a74-61ab-4535-82fb-141ebe2e21be',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another #4 response'
                            },
                        ]
                    },
                    {
                        id: '51b0592e-fcde-4663-aafa-85516c78b900',
                        displayName: 'James',
                        date: '2019-06-03T13:58:00.538661Z',
                        thumbStatus: 'up',
                        displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        body: 'hey this is my sample #4. It shouldnt be revelated right away. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines.hey this is my sample comment. lets make this longer so that we can see that this expands beyond 5 lines',
                        subcomments: [
                            {
                                id: '3438632c-7e44-4f74-a0b7-76af56f15b62',
                                displayName: 'MedStar',
                                date: '2019-06-03T14:58:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is my subcomment #4 response'
                            },
                            {
                                id: '407a0913-eeca-46d6-aed0-672f050912f5',
                                displayName: 'James',
                                date: '2019-06-03T15:30:00.538661Z',
                                displayImage: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                                body: 'hey this is another #4 response'
                            },
                        ]
                    },
                ]}



                />
        )
    }
}
export default CommentsListContainer
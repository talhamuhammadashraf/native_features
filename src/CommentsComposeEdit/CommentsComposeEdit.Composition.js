import React, { Component } from 'react'
import CommentsComposeEditComponent from './CommentsComposeEdit.Component'

// This is a placeholder for where we store
// "state" and lifecycle logic for the component.
// The intent is that every component beneath
// this component in the tree will be a "dumb" (function)
// component, and that any "class" functionality needed down
// the tree will be passed down from here as props

class CommentsComposeEditComposition extends Component {
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
            <CommentsComposeEditComponent
                {...this.props}
                />
        )
    }
}

export default CommentsComposeEditComposition
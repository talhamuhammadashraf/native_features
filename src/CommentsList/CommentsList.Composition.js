import React, { Component } from 'react'
import CommentsListComponent from './CommentsList.Component'

// This is a placeholder for where we store
// "state" and lifecycle logic for the component.
// The intent is that every component beneath
// this component in the tree will be a "dumb" (function)
// component, and that any "class" functionality needed down
// the tree will be passed down from here as props

class CommentsListComposition extends Component {
    constructor(props){
        super(props)
        this.state = {
            thumbStatus: null
        }
    }

    updateThumbStatus(thumbStatus){
        this.setState({thumbStatus: thumbStatus})
    }

    onPressShowMore(index){
        // Put rest of "show more" logic here,
        // and then the this.props.onPressShowMore
        // gets called after
        this.props.onPressShowMore()
    }

    render() {
        return (
            <CommentsListComponent
                {...this.props}
                onPressThumbsUp={()=>this.updateThumbStatus('up')}
                onPressThumbsDown={()=>this.updateThumbStatus('down')}
                thumbStatus={this.state.thumbStatus}
                onPressShowMore={this.onPressShowMore}
                />
        )
    }
}

export default CommentsListComposition
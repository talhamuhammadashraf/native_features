import React, { Component } from 'react'
import { Alert } from 'react-native'
import { FormikWrapper } from '../common/HOCs/FormikWrapper';
import ProviderScoreWidgetComponent from './ProviderScoreWidget.Component'

// This is a placeholder for where we store
// "state" and lifecycle logic for the component.
// The intent is that every component beneath
// this component in the tree will be a "dumb" (function)
// component, and that any "class" functionality needed down
// the tree will be passed down from here as props

class ProviderScoreWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
            <ProviderScoreWidgetComponent
                {...this.props}
                subtitleMessage={'Matched 82 out of 100 based on your plans, location, and 123 visitors'}
                score={82}
                rating={93}
                networkStatus={'In Network'}
                distanceText={'0.8 mi'}
                followupMessage={'Find other Urgent Cares near by...'}
                onPressFollowUp={()=>Alert.alert('onPressFollowUp')}
                />
        )
    }
}

export default FormikWrapper(ProviderScoreWidget)
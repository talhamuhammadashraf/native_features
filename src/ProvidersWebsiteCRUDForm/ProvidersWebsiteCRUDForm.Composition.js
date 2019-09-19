import React, { Component } from 'react'
import { FormikWrapper } from '../common/HOCs/FormikWrapper';
import WithKeyboardAnimationHOC from '../common/HOCs/WithKeyboardAnimation.HOC'
import ProvidersWebsiteCRUDFormComponent from './ProvidersWebsiteCRUDForm.Component'

class ProvidersWebsiteCRUDFormComposition extends Component {
    // Note: There might be a more clever way to do this...
    constructor(props){
        super(props)
        this.textInput1Ref = React.createRef()
        this.textInput2Ref = React.createRef()
        this.textInput3Ref = React.createRef()
        this.textInput4Ref = React.createRef()
        this.textInput5Ref = React.createRef()
        this.scrollViewRef = React.createRef()
    }
    onSubmitEditing_textInput1 = () => {
        this.textInput2Ref.current.focus()
    }

    onSubmitEditing_textInput2 = () => {
        this.textInput3Ref.current.focus()
    }

    onSubmitEditing_textInput3 = () => {
        this.textInput4Ref.current.focus()
    }

    onSubmitEditing_textInput4 = () => {
        this.textInput5Ref.current.focus()
    }

    onSubmitEditing_textInput5 = () => {
        const{
            submitForm,
        } = this.props
        submitForm()
    }

    render() {
        const {
            textInput1Ref,
            textInput2Ref,
            textInput3Ref,
            textInput4Ref,
            textInput5Ref,
            scrollViewRef,
            onSubmitEditing_textInput1,
            onSubmitEditing_textInput2,
            onSubmitEditing_textInput3,
            onSubmitEditing_textInput4,
            onSubmitEditing_textInput5,
        } = this
        return(
            <ProvidersWebsiteCRUDFormComponent
                {...this.props}
                textInput1Ref={textInput1Ref}
                textInput2Ref={textInput2Ref}
                textInput3Ref={textInput3Ref}
                textInput4Ref={textInput4Ref}
                textInput5Ref={textInput5Ref}
                scrollViewRef={scrollViewRef}
                onSubmitEditing_textInput1={onSubmitEditing_textInput1}
                onSubmitEditing_textInput2={onSubmitEditing_textInput2}
                onSubmitEditing_textInput3={onSubmitEditing_textInput3}
                onSubmitEditing_textInput4={onSubmitEditing_textInput4}
                onSubmitEditing_textInput5={onSubmitEditing_textInput5}
                />
        )
    }

}


export default WithKeyboardAnimationHOC(FormikWrapper(ProvidersWebsiteCRUDFormComposition))

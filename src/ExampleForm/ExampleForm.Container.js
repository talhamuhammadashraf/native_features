import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
// import { goBack } from 'routing/duck/'
// import { searchOperations as ops } from '../../duck/'
import ExampleFormComposition from './ExampleForm.Composition'
import {validateForm} from './validate'


class ExampleFormContainer extends Component {
  render() {
    const { onPressBack, onSubmit} = this.props
    return(
      <ExampleFormComposition
        validate={validateForm}
        initialValues={{
          medical_note: 'example initial value',
        }}
        onPressBack = {()=>Alert.alert('onPressBack')}
        onPressCancel = {()=>Alert.alert('onPressCancel')}
        onSubmit={onSubmit}
        />
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   validate: validateForm,
//   initialValues: {
//     medical_note: 'example initial value',
//   }
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onPressBack: () => dispatch(goBack(ownProps)),
//   onSubmit: (values) => dispatch(ops.sendExampleFormDetail(ownProps, values)),
// })
// export default connect(null, mapDispatchToProps)(ExampleFormContainer)

export default ExampleFormContainer
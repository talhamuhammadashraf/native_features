import React, {Component} from 'react'
import { Formik } from 'formik'


export const FormikWrapper = OriginalComponent => {
  return (
    // eslint-disable-next-line
    class WrappedComponent extends Component {
      // Binding this here so we can use a ref to access it later
      handleRemoteSubmitForm = e => {
        if (this.submitMyForm) {
          this.submitMyForm(e)
        }
      }
      render () {
        return (
          <Formik {...this.props}>
            {FormikProps => {
              // bind the submission handler remotely
              this.submitMyForm = FormikProps.submitForm
              return <OriginalComponent {...this.props} {...FormikProps} />
            }}
          </Formik>
        )
      }
    }
  )
}

export default FormikWrapper

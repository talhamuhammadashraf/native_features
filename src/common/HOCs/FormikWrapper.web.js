import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
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
        const {outerWrapper, innerWrapper} = styles
        return (
          <Formik
            {...this.props}
            style={{ flex: 1 }}>
            {
              FormikProps => {
                this.submitMyForm = FormikProps.submitForm
                return (
                  <View style={outerWrapper}>
                    <form onSubmit={FormikProps.handleSubmit}>
                      <View style={innerWrapper}>
                        <OriginalComponent {...this.props} {...FormikProps} />
                      </View>
                      <View style={{ display: "none" }}>
                        <button type="submit" />
                      </View>
                    </form>
                  </View>
                )
              }

            }
          </Formik>
        )
      }
    }
  )
}

const styles = StyleSheet.create({
    outerWrapper: {
    },
    innerWrapper: {
        height: '100%',
    }
})

export default FormikWrapper;

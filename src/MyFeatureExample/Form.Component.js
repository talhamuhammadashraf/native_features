import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { FormikTextInput } from '../common/components/';
import { FormikWrapper } from '../common/HOCs/FormikWrapper';

// Two key helper props get "injected"
// submitForm: Executes the callback function "onSubmit" with values
// i.e. submitForm is equivalent to () => this.props.onSubmit(this.props.values)
// isValid: returns True/False if the values pass validation

class FormComponent extends Component {
  fieldRef = {}

  focusNextField = (key) => {
    this.fieldRef[key].textInputRef.focus()
  }

  render() {
    const { outerWrapper, fieldWrapper } = styles
    return (
      <View style={outerWrapper}>
        <View style={fieldWrapper}>
          <FormikTextInput
            id="sampleinput"
            name="sampleinput"
            label="Sample Input"
            placeholder="Placeholder for the Sample Input"
            type="text"
            value={this.props.values.sampleinput}
            touched={this.props.touched["sampleinput"]}
            error={this.props.errors["sampleinput"]}
            onBlur={this.props.handleBlur("sampleinput")}
            onChange={this.props.handleChange("sampleinput")}
            style={FormikTextInputStyles}
          />
        </View>
        <Button
          title={'submit'}
          disabled={!this.props.isValid}
          onPress={this.props.submitForm}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerWrapper: {
    paddingTop: 4,
  },
  fieldWrapper: {
    paddingBottom: 4,
  },
})

const FormikTextInputStyles = StyleSheet.create({
  outerWrapper: {
  },
  textInputStyle: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 6,
  },
})


export default FormikWrapper(FormComponent);

import React, { Component } from 'react';
import { View, Platform, TextInput, Text, StyleSheet } from 'react-native';

export class FormikTextInput extends Component {
    render() {
        const {
            id = 'needsID',
            placeholder,
            onBlur,
            onChange,
            value,
            error,
            touched = false,
            secureTextEntry,
            multiline,
            maxLength,
            numberOfLines,
            style = {},
            textContentType,
            autoFocus,
            blurOnSubmit = true,
            autoCapitalize = 'sentences',
            onSubmitEditing,
            onFocus=()=>({}),
            returnKeyType,
        } = this.props

        const { outerWrapper, textInputStyle, errorTextStyle } = styles

        const {
            outerWrapper: outerWrapperOR = {},
            textInputStyle: textInputStyleOR = {},
        } = style

        let optionalWebFontSize = Platform.OS === 'web'
            ? { fontSize: 16 }
            : {}

        return (
            <View style={[outerWrapper, outerWrapperOR]}>
                <TextInput
                    style={[
                        textInputStyle,
                        textInputStyleOR,
                        optionalWebFontSize
                    ]}
                    id={id}
                    ref={textinputcomponent =>
                        (this.textInputRef = textinputcomponent)
                    }
                    onFocus={onFocus}
                    secureTextEntry={secureTextEntry}
                    textContentType={textContentType}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                    onSubmitEditing={onSubmitEditing}
                    autoCorrect={true}
                    autoFocus={autoFocus}
                    returnKeyType={returnKeyType}
                    autoCapitalize={autoCapitalize}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onBlur={onBlur}
                    blurOnSubmit={blurOnSubmit}
                    maxLength={maxLength}
                    underlineColorAndroid="transparent"
                />
                {error && touched && (
                    <Text style={errorTextStyle}>{error}</Text>
                )}
            </View>
        )
    }
}

//Style
const styles = StyleSheet.create({
    outerWrapper: {
    },
    textInputStyle: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 3,
        paddingHorizontal: 2,
    },
    errorTextStyle: {
        fontSize: 12,
        paddingVertical: 2,
        color: 'red',
    },
});

export default FormikTextInput;

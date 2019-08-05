import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-native-fontawesome"

let NATIVE_VERSION = props => {
    const {icon, brand, color, size} = props
    let ROUNDED = SIZE_CONVERSION(size)
    return (
        <Icon 
            icon={brand ? ['fab', brand] : icon}
            color={color}
            size={ROUNDED} 
        />
    )
}

const SIZE_CONVERSION = (size) => {
    if (size <= 8) {
        return 8
    } else if (size > 8 && size <= 16) {
        return 12
    } else if (size > 16 && size <= 24) {
        return 18
    } else if (size > 24 && size <= 32) {
        return 28
    } else if (size > 32 && size <= 40) {
        return 36
    } else if (size > 40 && size < 60) {
        return 50
    } else if (size > 60 && size <= 84) {
        return 72
    } else if (size > 84 && size <=108) {
        return 96
    } else if (size > 108 <=132) {
        return 120
    } else {
        return 16
    }
}

export default NATIVE_VERSION;

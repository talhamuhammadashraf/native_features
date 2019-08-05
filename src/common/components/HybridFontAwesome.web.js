import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

let WEB_VERSION = props => {
    const {icon, brand, color, size } = props

    let stringSize = SIZE_CONVERSION(size)
    return(
        <Icon
            icon={brand ? ['fab', brand] : icon}
            color={color}
            size={stringSize}
            />
    )
}


const SIZE_CONVERSION = (size) => {
    if (size <= 8) {
        return "xs"
    } else if ((size > 8) && (size <= 16)) {
        return "sm"
    } else if ((size > 16) && (size <= 24)) {
        return "1x"
    } else if ((size > 24) && (size <= 32)) {
        return "lg"
    } else if ((size > 32) && (size <= 40)) {
        return "2x"
    } else if ((size > 40) && (size <= 60)) {
        return "3x"
    } else if ((size > 60) && (size <= 84)) {
        return "4x"
    } else if ((size > 84) && (size <=108)) {
        return "6x"
    } else if ((size > 108) && (size <= 132)) {
        return "7x"
    } else {
        return "1x"
    }
}

export default WEB_VERSION
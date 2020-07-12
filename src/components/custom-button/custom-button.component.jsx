import React from 'react';

import './custom-button.styles.scss';
// import { CustomButtonContainer } from './cutom-button.styles'
///**
// * 
const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProperties}) =>(

    <button className={`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProperties}>
    {children}
    </button>

)
 //*/
/** 
const CustomButton = ({children, ...props}) =>(
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)
*/
export default CustomButton;
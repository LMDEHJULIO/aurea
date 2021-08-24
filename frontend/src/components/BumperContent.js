import React from 'react';

const BumperContent = ({props}) => {
    return(
        <div className="bumper__content bumper__content--furniture">
            <h3 className="bumper__title">{props.textData.title}</h3>
            <p>
                {props.textData.text}
            </p>
            <a>{props.textData.linkText}</a>
        </div>
    )
}

export default BumperContent
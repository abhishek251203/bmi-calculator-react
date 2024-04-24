import React from 'react';

function Button({buttonText, onPre}) {
    return (
        <div className='buttons' onClick={onPre}>
            <button>{buttonText}</button>
        </div>
    );
}

export default Button;
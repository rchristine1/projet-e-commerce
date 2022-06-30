import React from 'react';
export default function Button(props) {

    return (
        <div>
            <button type='button' className='btn btn-outline-secondary btn-rounded' 
                onClick={props.onClick}>{props.label}</button>
        </div>
    )
}
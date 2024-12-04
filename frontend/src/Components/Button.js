import React from 'react'

export default function Button(props) {
    const { className, ...remProps } = props;
    return (
        <button className={`bg-blue-500 hover:bg-blue-600 transition-colors duration-200 my-2 rounded-lg px-2 py-1 text-lg text-white ${className}`} {...remProps}>
            {props.children}
        </button>
    )
}

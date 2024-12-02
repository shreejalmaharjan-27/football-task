const Input = (props) => {
    return (
        <input
            className={`${props.className} border border-gray-400 rounded-lg px-2 py-1 text-lg`}
            {...props}
        />
    )
}

export default Input
const Input = (props) => {
    return (
        <div className="inline-flex flex-col">
            {
                props.label && (
                    <label className="text-sm font-bold" htmlFor={props.id || props.name}>{props.label}</label>
                )
            }
            <input
                className={`${props.className} border border-gray-400 rounded-lg px-2 py-1 text-lg text-black`}
                {...props}
            />
        </div>
    )
}

export default Input
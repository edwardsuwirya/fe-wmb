function AppInput(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type ? props.type : 'text'}
                className="form-control"
                id={props.id}
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(props.id, e.target.value)}
            />
        </>
    )
}

export default AppInput;

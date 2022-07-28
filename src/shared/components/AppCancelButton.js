function AppCancelButton(props) {
    return (
        <button disabled={props.isDisabled} type="button" className="btn btn-warning" onClick={props.onCancel}>
            {props.label}
        </button>
    )
}

export default AppCancelButton;

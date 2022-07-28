function AppSubmitButton(props) {
    return (
        <button disabled={props.isDisabled} type="submit" className="btn btn-success">
            {props.label}
        </button>
    )
}

export default AppSubmitButton;

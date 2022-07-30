import './messageBox.css';
import {Toast} from "react-bootstrap";

const MessageBox = ({isShowing, handleToggleShow, type, message}) => {
    return (
        <div className='messagebox-container'>
            <Toast show={isShowing} onClose={handleToggleShow} animation={true}>
                <Toast.Header>
                    <strong className="me-auto">{type}</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    )
}
export default MessageBox;
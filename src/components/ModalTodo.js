import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function ModalTodo(props) {

    const [inputTodo, setInputTodo] = useState("");

    let changeInput = (e) => {
        setInputTodo(e.target.value);
    }

    let submitHandle = () => {
        props.editHandle(props.editTodoItem.id, inputTodo);
        props.handleClose();
    }

    return (

        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.editTodoItem.todo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Control onChange={changeInput} name="newTodo" type="text" placeholder="Enter new todo" />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={submitHandle}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        
    )
}

export default ModalTodo

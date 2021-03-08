import React from 'react'
import { Button, Accordion, Card } from 'react-bootstrap';

function TodoItem(props) {

    let editHandle = () => {
        props.setEditTodo({
            id : props.id,
            todo : props.todo
        })
        props.handleShow();
    }

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} className="hover-toggle" eventKey={props.id}>
            {props.todo}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.id}>
            <Card.Body>
                <div className="d-flex justify-content-around">
                <Button onClick={() => editHandle()} variant="success" type="submit">
                    Edit
                </Button>
                <Button onClick={() => props.deleteHandle(props.id)} variant="outline-danger" type="submit">
                    Delete
                </Button>
                </div>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default TodoItem

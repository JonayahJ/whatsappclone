import React, { useRef } from 'react'
import { Container, Form, Button } from "react-bootstrap"
import {v4 as uuidv4} from "uuid" // creates a new random ID string

export default function Login({ onIdSubmit }) {
    const idRef = useRef()
    
    function handleSubmit(e) {
        e.preventDefault()
        // the onSubmit gets the current value of the login field and sets that to the ID reference
        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidv4()) // creates a new id when the user clicks on the create a new id button
    }

    return (
        <div>
            <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
                {/* we're using onSubmit like an onClick but for a submit button */}
                <Form onSubmit={handleSubmit} className="w-100">
                    <Form.Group>
                        <Form.Label>Enter Your ID</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Button type="submit" className="mr-2">Login</Button>
                    <Button onClick={createNewId} variant="secondary">Creat a new ID</Button>
                </Form>
            </Container>
        </div>
    )
}

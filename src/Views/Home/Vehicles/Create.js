import React, { useState } from 'react'
import { Button, Modal, Form, Badge } from 'react-bootstrap';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../../Firebase'

export default function Create() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //intial state items
    const [model, setmodel] = useState(''); //vehicle model
    const [brand, setbrand] = useState(''); //vehicle brand
    const [image, setimage] = useState(''); //vehicle image
    const [rate, setrate] = useState(0); //vehicle rate per hour

    //error states
    const [error, seterror] = useState('');

    //process state 
    const [process, setprocess] = useState(false);

    //save vehicle function
    function saveVehicle(){
        if(model === ''){
            seterror('Vehicle model required')
        } else if(brand === ''){
            seterror('Vehicle brand required')
        } else if(image === ''){
            seterror('Vehicle image required')
        } else if(rate === ''){
            seterror('Vehicle rate required')
        } else {
            if(Number(rate) === 0){
                seterror('Vehicle rate should more than 0')
            } else {
                seterror('')
                saveToFirestore()
                setprocess(true)
            }
        }
        
        async function saveToFirestore(){
            let save_data = {
                model,
                brand,
                image,
                rate,
                created_at: serverTimestamp()
            }
            await addDoc(collection(db, "vehicles"), save_data).then((doc) => { 
                console.log("Document written with ID: ", doc.id);
                //hide the model
                setShow(false)
                setmodel('')
                setbrand('')
                setimage('')
                setrate(0)
                setprocess(false)
            })
        }
    }

    return (
        <>
            <div className="d-grid gap-2 mb-5">
                <Button className="btn-success btn-block" onClick={handleShow}>Add New</Button>
            </div>
            
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Vehicle Model</Form.Label>
                        <Form.Control 
                            type="text"
                            value={model}
                            onChange={(model) => setmodel(model.target.value)}
                            />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Vehicle Brand</Form.Label>
                        <Form.Control 
                            type="text"
                            value={brand}
                            onChange={(brand) => setbrand(brand.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Vehicle Image (URL)</Form.Label>
                        <Form.Control 
                            type="text"
                            value={image}
                            onChange={(image) => setimage(image.target.value)} />
                        <Form.Text className="text-muted">
                        Paste your image URL here
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rate per KM in AED</Form.Label>
                        <Form.Control 
                            type="number"
                            value={rate}
                            onChange={(rate) => setrate(rate.target.value)} />
                    </Form.Group>

                    <span className="text-danger">
                        <small>
                            <strong>{error}</strong>
                        </small>
                    </span>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button disabled={process} variant="success" onClick={saveVehicle}>
                    { process === true ? 'Please wait' : 'Save Changes' }
                </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

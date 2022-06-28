import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'; 
import { db } from '../../Firebase'
import { doc, getDoc } from "firebase/firestore";

function RideView() {

    //parameter
    let { id } = useParams();

    //loading 
    const [loading, setloading] = useState(true);

    //order information
    const [orderInfo, setOrderInfo] = useState(undefined);

    useEffect(() => {
        async function getRideInformaiton(){
            const docRef = doc(db, "orders", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setOrderInfo(docSnap.data())
                setloading(false)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                setloading(false)
            }

        }

        getRideInformaiton()
          
    }, []);

    if(loading){
        return(<>Loading..</>)
    }

    if(orderInfo === undefined){
        return(<><h3>Sorry order not found!</h3></>)
    }


    return (
        <>
        <Row>
            <Col className="text-center mt-4">
                <h1>Thank you for the order!</h1>
                <h2>Hello, { orderInfo.user_name }</h2>
                <p>This is your order infomarion</p>
                <img src={orderInfo.vehile_info.image} alt={ orderInfo.vehile_info.model } width="100%"/>
                <h1 className="mt-3">Total Fare - { orderInfo.total_fare } AED</h1>
                <h2 className="mt-0">Total Ride - { orderInfo.total_km } KM</h2>

                <h3 className="mt-0">{ orderInfo.vehile_info.brand } - { orderInfo.vehile_info.model  }</h3>
                
            </Col>
        </Row>
        </>
    )
}


export default RideView
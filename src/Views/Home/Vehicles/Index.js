import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'; 
import { db } from '../../../Firebase'

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function Index() {

  //list items 
  const [list, setList] = useState([]);

  //loading state
  const [loading, setloading] = useState(true);

  useEffect(() => {
    //get vehicle list real time update
    const q = query(collection(db, "vehicles"), orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      //create empty array
      const vehicles = [];
      querySnapshot.forEach((doc) => {
        //push to array
        vehicles.push(doc.data());
      });
      //set items to local state
      setList(vehicles)
      //disable loading
      setloading(false)
    });
    return () => {
      //finish data base call
      unsubscribe();
    };
  }, []);

  if(loading){
    return(<>
      <Row className="mb-4">
        <Col>Loading..</Col>
      </Row>
    </>)
  }

  return (
    <>

    <Row className="mb-4">
      {
        list.map((single, index) => 
            <Col key={index} lg="4" className="mb-4">
              <div className="singleVehicle">
                <div 
                  className="singleVehicleImage" 
                  style={{ backgroundImage: "url("+ single.image +")", }}>
                </div>
                <div className="singleVehicleInfo">
                  <div className="singleVehicleInfoLeft">
                    <h4>{ single.model }</h4>
                    <h6>{ single.brand }</h6>
                  </div>
                  <div className="singleVehicleInfoRight">
                    <h4>{ single.rate }AED </h4>
                    <small>per 1km</small>
                  </div>
                </div>
               
              </div>
            </Col>
          )
      }
      
    </Row>

    
    </>
  )
}

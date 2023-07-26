import React from "react";
import Styles from "./Courses.module.css";
import {AiFillDelete} from 'react-icons/ai';
import { Col, Row } from "react-bootstrap";

const Courses = (props) => {

  const { course } = props; // destructing props

  return (
    <Row className={Styles.courseItem} >
      <Col  ><h3>{course?.name}</h3>
      <p>{course?.details}</p></Col>
      <Col md="auto" className="mt-3"> <button className="btn btn-danger"><AiFillDelete /></button></Col>
     
      
      
    </Row>
  );
};

export default Courses;

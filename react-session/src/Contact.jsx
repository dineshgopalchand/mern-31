import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const formInitVal = {
  fullName: "",
  email: "",
  phone: "",
  topic: "",
  gender: "",
  website: "",
  details: "",
};
const Contact = () => {
  const gender = [
    {
      value: "m",
      label: "Male",
    },
    {
      value: "F",
      label: "Female",
    },
    {
      value: "o",
      label: "Others",
    },
  ];
  const [formVal, setFormVal] = useState(formInitVal);
  const formHandler=(e)=>{
    e.preventDefault();
    console.log(formVal);
  }
  return (
    <div>
      <h3>Contact Form</h3>
      <hr />
      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={formVal.fullName}
            onChange={(e) => {
              setFormVal((prev) => {
                return { ...prev, fullName: e.target.value };
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={formVal.email}
            onChange={(e) => {
              setFormVal((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="+91-999-999-9999"
            value={formVal.phone}
            onChange={(e) => {
              setFormVal((prev) => {
                return { ...prev, phone: e.target.value };
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Gender</Form.Label>
          <Row md={6}>
            {gender.map((g) => (
              <Col key={g.value}>
                <Form.Check
                  type="radio"
                  name="gender"
                  value={g.value}
                  label={g.label}
                  // onChange={(e) => {
                  //   setFormVal((prev) => {
                  //     return { ...prev, gender: e.target.value };
                  //   });
                  // }}
                />
              </Col>
            ))}
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="url"
            placeholder="http://www.abc.com"
            value={formVal.website}
            onChange={(e) => {
              setFormVal((prev) => {
                return { ...prev, website: e.target.value };
              });
            }}
          />
        </Form.Group>
        <Form.Select
          aria-label="Select Topic"
          // value={formVal.topic}
          // onChange={(e) => {
          //   setFormVal((prev) => {
          //     return { ...prev, topic: e.target.value };
          //   });
          // }}
        >
          <option>Open this select menu</option>
          <option value="1">Education</option>
          <option value="2">Entertainment</option>
          <option value="3">Sports</option>
          <option value="3">Other</option>
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={formVal.details}
            onChange={(e) => {
              setFormVal((prev) => {
                return { ...prev, details: e.target.value };
              });
            }}
          />
        </Form.Group>
        <Button variant="primary"  type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;

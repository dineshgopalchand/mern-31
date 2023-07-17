import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const formInitVal = {
  fullName: "",
  email: "",
  phone: "",
  topic: "1",
  gender: "m",
  website: "",
  details: "",
};
const gender = [
  {
    value: "m",
    label: "Male",
  },
  {
    value: "f",
    label: "Female",
  },
  {
    value: "o",
    label: "Others",
  },
];
const Contact = () => {
  const [formVal, setFormVal] = useState(formInitVal);
  const [validated, setValidated] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    console.log(formVal);
  };
  return (
    <div>
      <h3>Contact Form</h3>
      <hr />
      <Form onSubmit={formHandler} validated={validated}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            required
            minLength={3}
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
                  checked={formVal.gender && formVal.gender === g.value}
                  onChange={(e) => {
                    setFormVal((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
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
          value={formVal.topic}
          onChange={(e) => {
            setFormVal((prev) => {
              return { ...prev, topic: e.target.value };
            });
          }}
        >
          <option>Select Category</option>
          <option value="1">Education</option>
          <option value="2">Entertainment</option>
          <option value="3">Sports</option>
          <option value="4">Other</option>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {JSON.stringify(formVal)}
    </div>
  );
};

export default Contact;

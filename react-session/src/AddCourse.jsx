import React, { useState } from "react";
const intiFormData = { title: "", desc: "" };
const AddCourse = ({ addCourse }) => {
  const [formData, setFormData] = useState(intiFormData);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // console.log(formData);
        addCourse(formData.title, formData.desc);
        setFormData(intiFormData);
      }}
    >
      <div className="row">
        <div className="col-10">
          <div className="input-group">
            <input
              type="text"
              value={formData.title}
              className="form-control"
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, title: e.target.value };
                });
              }}
              placeholder="Course Title"
              name="course-title"
            />
          </div>
          <div className="input-group mt-2">
            <textarea
              className="form-control"
              placeholder="Description"
              value={formData.desc}
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, desc: e.target.value };
                });
              }}
              name="desc"
            ></textarea>
          </div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary h-100">Add Course</button>
        </div>
      </div>
    </form>
  );
};

export default AddCourse;

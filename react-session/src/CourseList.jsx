import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import { courses } from "./data/course-data";
import AddCourse from "./AddCourse";
// import SuccessButton from "./styled-component/SuccessButton";

const CourseList = () => {
  const title = "Courses List";
  const [courseList, setCourseList] = useState(courses);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    return () => {
      console.log("it will run at the end");
    };
  }, []);

  function addNewCourse(title, desc) {
    const newCourse = {
      id: Date.now(),
      name: title,
      details: desc,
    };
    setCourseList((prev) => {
      setShowForm(false);
      return [newCourse, ...prev];
    
    });
  }

  return (
    <div>
      <h2>
        {title}{" "}
        <span style={{ fontSize: "0.55em" }}> ({courseList.length})</span>
      </h2>
      <button
        className={`btn btn-${showForm ? "info" : "primary"}`}
        onClick={(e) => {
          setShowForm((prev) => !prev);
        }}
      >
        {showForm ? "Close Form" : "Add New"}
      </button>

      {/* <SuccessButton>styled button</SuccessButton> */}

      {showForm ? (
        <div className="m-2">
          <AddCourse addCourse={addNewCourse} />
        </div>
      ) : (
        <></>
      )}

      <hr />
      <div>This is a course details block</div>
      {courseList.map((course) => {
        return <Courses course={course} key={course.id} />;
      })}
    </div>
  );
};

export default CourseList;

import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import { courses } from "./data/course-data";
import AddCourse from "./AddCourse";

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
      // console.log("course updated");
      return [newCourse, ...prev];
    });
  }

  return (
    <div>
      <h2>
        {title}{" "}
        <span style={{ fontSize: "0.55em" }}> ({courseList.length})</span>
      </h2>
      {!showForm ? (
        <button
          className="btn btn-primary"
          onClick={(e) => {
            console.log(e);
            setShowForm(true);
            // addNewCourse();
          }}
        >
          Add New
        </button>
      ) : (
        <button
          className="btn btn-info"
          onClick={(e) => {
            setShowForm(false);
            // addNewCourse();
          }}
        >
          Close Form
        </button>
      )}
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

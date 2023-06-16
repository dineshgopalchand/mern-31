import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import { courses } from "./data/course-data";
import AddCourse from "./AddCourse";

const CourseList = () => {
  const title = "Courses List";
  const [courseList, setCourseList] = useState(courses);

  useEffect(() => {
    // setTimeout(() => {
    //   addNewCourse();
    // }, 2000);
    return () => {
      console.log("it will run at the end");
    };
  }, []);

  function addNewCourse(title,desc) {
    const newCourse = {
      id: Date.now(),
      name: title,
      details: desc,
    };
    setCourseList((prev) => {
      console.log("course updated");
      return [...prev, newCourse];
    });
  }

  return (
    <div>
      <h2>{title}</h2>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          console.log(e);
          // addNewCourse();
        }}
      >
        Add New
      </button>
      <div className="m-2">
        <AddCourse addCourse={addNewCourse} />
      </div>

      <hr />
      <div>This is a course details block</div>
      {courseList.map((course) => {
        return <Courses course={course} key={course.id} />;
      })}
    </div>
  );
};

export default CourseList;

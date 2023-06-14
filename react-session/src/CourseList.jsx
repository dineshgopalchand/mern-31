import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import { courses } from "./data/course-data";

const CourseList = () => {
  const title = "Courses List";
  const [courseList, setCourseList] = useState(courses);

  useEffect(() => {
    setTimeout(() => {
      const newCourse = {
        id: Date.now(),
        name: "Git",
        details: "this is git course",
      };
      setCourseList((prev) => {
        console.log("course updated");
        return [...prev, newCourse];
      });
    }, 2000);
    return () => {
      console.log("it will run at the end");
    };
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <hr />
      <div>This is a course details block</div>
      {courseList.map((course) => {
        return <Courses course={course} key={course.id} />;
      })}
    </div>
    
  );
};

export default CourseList;

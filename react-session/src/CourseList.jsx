import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import AddCourse from "./AddCourse";

const CourseList = () => {
  const title = "Courses List";
  const [courseList, setCourseList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4110/courses")
      .then((res) => res.json())
      .then((coursesList) => {
        setCourseList(coursesList);
      });
  }, []);

  function addNewCourse(title, desc) {
    const newCourse = {
      name: title,
      details: desc,
    };
    fetch("http://localhost:4110/courses", {
      method: "POST",
      body: JSON.stringify(newCourse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          return Promise.reject({
            message: res.statusText,
            status: res.status,
          });
        }
      })
      .then((res) => res.json())
      .then((courses) => {
        setCourseList((prev) => {
          setShowForm(false);
          return [courses, ...prev];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const deleteCourse=(id)=>{
    fetch(`http://localhost:4110/courses/${id}`, {
      method: "DELETE",
    }).then(res=>{
      if (res.ok) {
        return res;
      } else {
        return Promise.reject({
          message: "Course don't exits",
          status: res.status,
        });
      }
    }).then(res=>{
      setCourseList((prev) => {
        return prev.filter(course=>course.id!==id);
      });
    }).catch(err=>{
      console.log(err);
    })
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
        return <Courses course={course} key={course.id} deleteCourse={deleteCourse} />;
      })}
    </div>
  );
};

export default CourseList;

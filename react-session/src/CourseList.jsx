import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import AddCourse from "./AddCourse";
import useFetch from "./hooks/useFetch";
import axios from "axios";
const COURSE_URL = "http://localhost:4110/courses";

const CourseList = () => {
  const title = "Courses List";
  const [courseList, setCourseList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [URL, setURL] = useState(COURSE_URL);
  const [options, setOptions] = useState({});

  const { data, loading, error } = useFetch(URL, options);
  console.log({ data, loading, error });
  useEffect(() => {
    setCourseList(data || []);
  }, [data]);

  function addNewCourse(title, desc) {
    const newCourse = {
      name: title,
      details: desc,
    };

    // axios
    //   .post(COURSE_URL, JSON.stringify(newCourse), {
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    axios({
      method: "POST",
      url: COURSE_URL,
      data: newCourse,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.data)
      .then((course) => {
        setCourseList((prev) => {
          setShowForm(false);
          return [course, ...prev];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const deleteCourse = (id) => {
    fetch(`${COURSE_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          return Promise.reject({
            message: "Course don't exits",
            status: res.status,
          });
        }
      })
      .then((res) => {
        setCourseList((prev) => {
          return prev.filter((course) => course.id !== id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        return (
          <Courses
            course={course}
            key={course.id}
            deleteCourse={deleteCourse}
          />
        );
      })}
    </div>
  );
};

export default CourseList;

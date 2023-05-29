import React from 'react'

function someLog(){
  return  'this is a dummy log';
}
const CourseList = () => {
  const title='Courses List';
  function someLogInside(){
    return  'this is a dummy log(inside)';
  }
  return (
    <div>
      <h2>{title}</h2>
      <p>{1+1}</p>
      <p>{someLog()}</p>
      <p>{someLogInside()}</p>
    </div>
  )
}

export default CourseList
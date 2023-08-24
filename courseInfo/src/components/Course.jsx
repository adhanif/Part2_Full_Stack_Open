import React from "react";
import Header from "./Header";
import Content from "./Content";

export default function Course({ course }) {
  const total = course.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  return (
    <div>
      <Header heading={course.name} />
      <Content course={course} />
      <h4>total of {total} exercises</h4>
    </div>
  );
}

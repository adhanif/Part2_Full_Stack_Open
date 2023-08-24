import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

export default function Course({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <React.Fragment key={course.id}>
          <Header heading={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </React.Fragment>
      ))}
    </div>
  );
}

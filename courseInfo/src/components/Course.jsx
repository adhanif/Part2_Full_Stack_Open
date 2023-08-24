import React from "react";

export default function Course({ course }) {
  const total = course.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);
  console.log(total);
  return (
    <div>
      <h1>{course.name}</h1>
      {course &&
        course.parts.map((part) => {
          return (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          );
        })}
      <h4>total of {total} exercises</h4>
    </div>
  );
}

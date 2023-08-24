import React from "react";

export default function Course({ course }) {
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
    </div>
  );
}

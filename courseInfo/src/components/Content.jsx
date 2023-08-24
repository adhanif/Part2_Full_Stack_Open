import React from "react";
import Part from "./Part";

export default function Content({ course }) {
  return (
    <div>
      {course &&
        course.parts.map((part) => {
          return <Part part={part} key={part.id} />;
        })}
    </div>
  );
}

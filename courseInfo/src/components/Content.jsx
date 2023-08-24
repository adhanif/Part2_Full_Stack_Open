import React from "react";
import Part from "./Part";

export default function Content({ parts }) {
  return (
    <div>
      {parts &&
        parts.map((part) => {
          return <Part part={part} key={part.id} />;
        })}
    </div>
  );
}

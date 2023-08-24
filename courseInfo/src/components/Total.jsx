import React from "react";

export default function Total({ parts }) {
  const total = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);
  return (
    <div>
      <h4>total of {total} exercises</h4>
    </div>
  );
}

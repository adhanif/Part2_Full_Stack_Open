import React from "react";
import axiosClient from "../services/axiosClient";

export default function Persons({ keyWord, persons }) {
  const personsToShow = !keyWord
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(`${keyWord.toLowerCase()}`)
      );

  const handleDelete = (e, id) => {
    const confirmed = window.confirm("Do you really want to delete?");
    if (confirmed) {
      axiosClient
        .Delete(id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      {personsToShow &&
        personsToShow.map((person) => {
          return (
            <div style={{ display: "flex" }} key={person.id}>
              <p style={{ margin: "0px" }}>
                {person.name} {person.number}
              </p>
              <button onClick={(e) => handleDelete(e, person.id)}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

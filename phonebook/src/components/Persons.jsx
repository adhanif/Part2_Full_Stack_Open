import React from "react";

export default function Persons({ keyWord, persons }) {
  const personsToShow = !keyWord
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(`${keyWord.toLowerCase()}`)
      );

  return (
    <div>
      {personsToShow &&
        personsToShow.map((person) => {
          return (
            <p style={{ margin: "0px" }} key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
    </div>
  );
}

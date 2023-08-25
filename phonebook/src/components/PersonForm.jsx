import React from "react";

export default function PersonForm({
  handleName,
  handleNumber,
  newName,
  newNumber,
  persons,
  setNewName,
  setPersons,
  setNewNumber,
}) {
  const addPerson = (e) => {
    e.preventDefault();

    newName === ""
      ? alert("Please enter a Name")
      : newNumber === ""
      ? alert("Please enter a phone number")
      : newNumber;

    const findName = persons.find((person) => {
      return person.name === newName;
    });

    if (findName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObj = {
      name: newName,
      number: newNumber,
    };
    setPersons([...persons, personObj]);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

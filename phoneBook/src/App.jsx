import "./App.css";

import { useState } from "react";

const PhoneContacts = (props) => {
  return (
    <>
      <h2 className="title">Numbers</h2>
      <div className="humanList">
        {props.personsToShow.map((person) => (
          <span className="person-chip" key={person.name}>
            Name: {person.name} <br />
            Number: {person.number || "Unknown"}
          </span>
        ))}
      </div>
    </>
  );
};

const PhoneFilter = (props) => {
  return (
    <>
      {" "}
      <label htmlFor="filter" className="filter-label">
        Add filter{" "}
      </label>
      <input
        type="text"
        className="filter-input"
        name="filter"
        value={props.newFilter}
        onChange={(event) => props.setNewFilter(event.target.value)}
      ></input>
    </>
  );
};

const PhoneForm = (props) => {
  return (
    <>
      {" "}
      <h2 className="title">Phonebook</h2>
      <form
        className="phone-form"
        onSubmit={(event) => {
          event.preventDefault();
          props.checker();
        }}
      >
        <div className="form-row">
          <label>name:</label>

          <input
            value={props.newName}
            onChange={(event) => props.setNewName(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label>number:</label>

          <input
            value={props.newNumber}
            onChange={(event) => props.setNewNumber(event.target.value)}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();
  const [newFilter, setNewFilter] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase()),
  );

  const nameChecker = () => {
    if (!Number.isNaN(Number(newName))) {
      setNewName("");
      return console.log("Now enter your real name");
    } else if (persons.some((human) => human.name === newName)) {
      return console.log(`Name ${newName} is already added into phonebook`);
    } else {
      console.log("NameChecker result is: true");
      return true;
    }
  };

  const numberChecker = () => {
    if (Number.isNaN(Number(newNumber)) || newNumber.length > 11) {
      setNewNumber("");
      return console.log("Now enter your real number");
    } else if (persons.some((human) => human?.number === newNumber)) {
      return console.log(`Your number is already added into phonebook`);
    } else {
      console.log("NumberChecker result is: true");
      return true;
    }
  };

  const checker = () => {
    setNewNumber(Number(newNumber));

    if (nameChecker() === true && numberChecker() === true) {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    } else {
      return alert("Something wen't wrong");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <PhoneForm
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
          checker={checker}
        />
        <PhoneFilter newFilter={newFilter} setNewFilter={setNewFilter} />
        <PhoneContacts personsToShow={personsToShow} />
      </div>
    </div>
  );
};

export default App;

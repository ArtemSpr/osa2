import "./App.css";

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const showPersons = () => {
    return persons.map((human) => <span key={human.name}>{human.name}</span>);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setPersons([...persons, { name: newName }]);
          setNewName("");
        }}
      >
        <div>
          name:
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div className="humanList">{showPersons()}</div>
    </div>
  );
};

export default App;

import React from 'react';
import { Todos, TodosComponent } from '../todos/Todos';
import './App.css';

function App() {
  const [version, setVersion] = React.useState(1);

  const updateVersion = () => {
    setVersion(version + 1)
  }

  const getVersionString = `${version} version`;

  return (
    <div className="App">
      <Todos version={version} updateVersion={updateVersion} />
      {getVersionString}
      <TodosComponent version={version} />
    </div>
  );
}

export default App;

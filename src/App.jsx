import React from 'react';
import ListItems from './components/ListItems';

function App() {
  return (
    <div className="App">
      <ul>
        <ListItems firstName="Mary" lastName="Poppins" />
        <ListItems firstName="John" lastName="Wayne" />
      </ul>
    </div>
  );
}

export default App;

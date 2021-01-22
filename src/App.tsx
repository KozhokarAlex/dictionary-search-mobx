import React from 'react';
import { WordCreator } from 'components/WordCreator';
import { Search } from './components/Search';

function App() {
  return (
    <div className="app">
      <WordCreator/>
      <Search/>
    </div>
  );
}

export default App;

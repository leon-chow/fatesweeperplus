import logo from './logo.svg';
import './App.css';

import Board from './components/gameplay/board/board';
import Header from './components/header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Board/>
    </div>
  );
}

export default App;

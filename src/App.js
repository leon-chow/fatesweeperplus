import './App.css';

import Board from './components/gameplay/board/board';
import Header from './components/shared/header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Board/>
    </div>
  );
}

export default App;

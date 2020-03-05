import React from 'react';
import './App.scss';
import Todos from './components/Todos';
import 'bootstrap/dist/css/bootstrap.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <Todos />
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;

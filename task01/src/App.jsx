import React from 'react';
import Draggable from 'react-draggable';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Draggable>
        <div className="box" style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}>
          Box 1
        </div>
      </Draggable>
      <Draggable>
        <div className="box" style={{ width: '150px', height: '150px', backgroundColor: 'red' }}>
          Box 2
        </div>
      </Draggable>
      <Draggable>
        <div className="box" style={{ width: '120px', height: '120px', backgroundColor: 'green' }}>
          Box 3
        </div>
      </Draggable>
      <Draggable>
        <div className="box" style={{ width: '80px', height: '80px', backgroundColor: 'yellow' }}>
          Box 4
        </div>
      </Draggable>
    </div>
  );
};

export default App;

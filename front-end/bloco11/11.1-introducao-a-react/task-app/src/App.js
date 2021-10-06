import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksList = ['Acordar', 'Tomar café', 'Aguar as plantas', 'Tratar dos gatos', 'Estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>
        { tasksList.map( task => Task(task))}
      </ul>
    );
  }
}

export default App;

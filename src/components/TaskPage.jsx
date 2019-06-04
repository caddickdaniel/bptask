import React, { Component } from 'react';
import Header from '../components/Header';

import TaskBox from '../components/TaskBox';

export default class TaskPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="taskBoxContainer">
          <TaskBox />
          <TaskBox />
          <TaskBox />
        </div>
      </div>
    );
  }
}

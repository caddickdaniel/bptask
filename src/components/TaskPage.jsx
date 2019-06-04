import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskBox from '../components/TaskBox';

export default class TaskPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <Footer />
      </div>
    );
  }
}

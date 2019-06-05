import React, { Component } from 'react';
import { Line } from 'rc-progress';

export default class TaskProcess extends Component {
  state = {
    progress: 0,
    taskInterval: 0,
    completedTasks: 0,
    tasksLeft: 0,
    allocatedTime: this.props.allocatedTime
  };

  render() {
    // const timeCountdown = () => {
    //   const { allocatedTime } = this.state;
    //   setInterval(function() {
    //     this.setState({ allocatedTime: allocatedTime - 1 });
    //   }, 5000);
    // };

    // timeCountdown();
    return (
      <div className="taskBox">
        <div className="taskInfo">
          <div />
          <div className="taskTitle">
            <p>Task</p>
            <h3>{this.props.taskTitle}</h3>
          </div>
          <div className="taskDescBox">
            <p>{this.props.taskDesc}</p>
          </div>
          <div>
            <small>Tasks in queue: {this.state.tasksLeft}</small>
            <small>Tasks completed: {this.state.completedTasks}</small>
            <small>Average task time: {this.state.taskInterval}</small>
            <small>Time remaining: {this.state.allocatedTime}</small>
          </div>
          <div>
            <Line
              percent={this.state.progress}
              strokeWidth="3"
              strokeColor="blue"
            />
          </div>
        </div>

        <div className="processBox">
          <div className="playButton">
            <i
              class="far fa-pause-circle"
              onClick={() => this.props.handleTaskStart()}
            />
          </div>
          <div className="workersBox">
            <p>Workers Assigned</p>
            <button disabled>
              <i class="fas fa-minus-circle" />
            </button>
            {this.props.assignedWorkers}/{this.props.maximumWorkers}
            <button disabled>
              <i class="fas fa-plus-circle" />
            </button>
          </div>
          <div className="priorityBox">
            <button disabled>
              <i class="fas fa-minus-circle" />
            </button>
            <i class="far fa-star" />
            <i class="far fa-star" />
            <i class="far fa-star" />
            <button disabled>
              <i class="fas fa-plus-circle" />
            </button>
          </div>
          <div>
            <div className="buttonContainer">
              <button className="unassignedBtn">
                <i class="fas fa-cog" />
                <p>Running</p>
              </button>
              <div className="dropdown-content" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

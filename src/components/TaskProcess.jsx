import React, { Component } from 'react';
// import { Line } from 'rc-progress';

const timeConverter = time => {
  let hours = time / 60;
  let rHours = Math.floor(hours);
  let minutes = (hours - rHours) * 60;
  let rMinutes = Math.round(minutes);
  return time + rHours + rMinutes;
};

export default class TaskProcess extends Component {
  state = {
    taskInterval: `${timeConverter(this.props.allocatedTime) /
      this.props.assignedWorkers}mins`,
    allocatedTime: timeConverter(+this.props.allocatedTime * 60),
    timeAlapsed: 0,
    progress: 0
  };
  render() {
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
            <small>Average task time: {this.state.taskInterval || 0}</small>
            <small>Time remaining: {this.state.allocatedTime || 0}mins</small>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              id="progressBar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div>
            {/* <Line
              percent={this.state.progress}
              strokeWidth="3"
              strokeColor="blue"
              id="progressBar"
            /> */}
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

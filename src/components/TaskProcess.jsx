import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class TaskProcess extends Component {
  state = {
    allocatedTime: this.props.allocatedTime.toFixed(2)
  };
  render() {
    const { allocatedTime } = this.state;
    return (
      <div className="taskBox">
        <div className="taskInfo">
          <div />
          <div className="taskTitle">
            <h3 className="processTitle">{this.props.taskTitle || 'Title'}</h3>
          </div>
          <div className="taskDescBox">
            <p>{this.props.taskDesc}</p>
          </div>
          <div className="progressStats">
            <small className="avgTime">
              Number of tasks: {this.props.tasks || 0}
            </small>
            <small className="timeRemaining">
              Time remaining: {this.state.allocatedTime || 0} mins
            </small>
          </div>
          <ProgressBar allocatedTime={allocatedTime} />
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

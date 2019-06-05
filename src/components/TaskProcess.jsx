import React, { Component } from 'react';

export default class TaskProcess extends Component {
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
          <div className="dropdown">
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

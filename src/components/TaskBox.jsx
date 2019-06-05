import React, { Component } from 'react';

export default class TaskBox extends Component {
  state = {
    workers: [],
    assignedWorkers: 0,
    priority: 0,
    maximumWorkers: 25
  };

  handleWorkerInc = inc => {
    const { assignedWorkers } = this.state;
    this.setState({ assignedWorkers: assignedWorkers + inc });
  };

  handlePriority = inc => {
    const { priority } = this.state;
    this.setState({ priority: priority + inc });
    console.log(priority);
  };

  handleAutoAssign = priority => {
    this.setState({
      assignedWorkers: Math.ceil(priority * 4.16)
    });
  };

  render() {
    return (
      <div className="taskBox">
        <div className="taskInfo">
          <div className="taskTitle">
            <p>Task</p>
            <input
              type="text"
              className="taskName"
              placeholder="Order Coffee Beans"
            />
          </div>
          <div className="taskDesc">
            <textarea placeholder="Process Description" />
          </div>
        </div>

        <div className="processBox">
          <div className="playButton">
            <i class="far fa-play-circle" />
          </div>
          <div className="workersBox">
            <p>Workers Assigned</p>
            <button
              disabled={this.state.assignedWorkers === 0 ? true : false}
              onClick={() => this.handleWorkerInc(-1)}
            >
              <i class="fas fa-minus-circle" />
            </button>
            {this.state.assignedWorkers}/{this.state.maximumWorkers}
            <button
              disabled={this.state.assignedWorkers === 25 ? true : false}
              onClick={() => this.handleWorkerInc(1)}
            >
              <i class="fas fa-plus-circle" />
            </button>
          </div>
          <div className="priorityBox">
            <button
              disabled={this.state.priority === 0 ? true : false}
              onClick={() => this.handlePriority(-1)}
            >
              <i class="fas fa-minus-circle" />
            </button>
            <i class="far fa-star" />
            <i class="far fa-star" />
            <i class="far fa-star" />
            <button
              disabled={this.state.priority === 6 ? true : false}
              onClick={() => this.handlePriority(1)}
            >
              <i class="fas fa-plus-circle" />
            </button>
          </div>
          <div className="dropdown">
            <div className="buttonContainer">
              <button>
                <i class="fas fa-cog" />
                <p>Unassigned</p>
              </button>
              <div className="dropdown-content">
                <p onClick={() => this.handleAutoAssign(this.state.priority)}>
                  Auto-Assign
                </p>
                <p>Select Workers</p>
                <p>Schedule</p>
                <p>Archive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

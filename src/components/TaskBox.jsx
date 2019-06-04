import React, { Component } from 'react';

export default class TaskBox extends Component {
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
          <div className="workersBox">
            <p>Workers Assigned</p>
            <i class="fas fa-minus-circle" />
            0/25
            <i class="fas fa-plus-circle" />
          </div>
          <div className="priorityBox">
            <i class="far fa-star" />
            <i class="far fa-star" />
            <i class="far fa-star" />
          </div>
          <div className="dropdown">
            <div className="buttonContainer">
              <button>
                <i class="fas fa-cog" />
                <p>Unassigned</p>
              </button>
              <div className="dropdown-content">
                <p>Auto-Assign</p>
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

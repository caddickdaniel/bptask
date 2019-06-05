import React, { Component } from 'react';
import TaskProcess from './TaskProcess';

export default class TaskBox extends Component {
  state = {
    workers: [
      'Paul',
      'Barry',
      'John',
      'Sarah',
      'Carla',
      'Danny',
      'Cheryl',
      'Justine',
      'Jerome',
      'Steph',
      'Julie',
      'Robbie',
      'Ashleigh',
      'Paula',
      'Shaq',
      'Ahmed',
      'Joe',
      'Tom',
      'Hannah',
      'Annie',
      'Jim',
      'Jimbo',
      'Terrence',
      'Jay',
      'Jim'
    ],
    assignedWorkers: 0,
    priority: 0,
    maximumWorkers: 25,
    allocatedTime: '0:00',
    tasks: 0,
    taskStart: false,
    taskTitle: '',
    taskDesc: ''
  };

  handleTaskTitle = title => {
    this.setState({ taskTitle: title });
    console.log(this.state.taskTitle);
  };

  handleTaskDesc = desc => {
    this.setState({ taskDesc: desc });
    console.log(this.state.taskDesc);
  };

  handleTaskStart = () => {
    if (this.state.taskStart === false) {
      this.setState({ taskStart: true });
    } else {
      this.setState({ taskStart: false });
    }
  };

  handleArchive = () => {
    document.querySelector('.taskBox').style.display = 'none';
  };

  handleTimeAllo = timeAllo => {
    this.setState({ allocatedTime: timeAllo.split(':').join('.') });
    console.log(this.state.allocatedTime);
  };

  handleTaskAllo = taskAllo => {
    this.setState({ tasks: +taskAllo });
    console.log(this.state.tasks);
  };

  clearRadios = () => {
    this.state.workers.forEach(function(worker) {
      document.querySelector(`input[name=${worker}]:checked`).checked = false;
    });
  };

  handleRadioBtn = inc => {
    const { assignedWorkers } = this.state;
    if (assignedWorkers < 25) {
      this.setState({ assignedWorkers: assignedWorkers + inc });
    }
    console.log(this.state.assignedWorkers);
  };

  handleModal = myModal => {
    const modal = document.getElementById(myModal);
    modal.style.display = 'block';
  };

  closeModal = myModal => {
    const modal = document.getElementById(myModal);
    modal.style.display = 'none';
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
    const {
      workers,
      taskStart,
      taskTitle,
      taskDesc,
      assignedWorkers,
      maximumWorkers,
      priority,
      allocatedTime,
      tasks
    } = this.state;
    const workerItems = workers.map(worker => {
      return (
        <tr>
          <input
            type="radio"
            name={worker}
            value="worker"
            className="radioBtn"
            onClick={() => this.handleRadioBtn(1)}
          />{' '}
          {worker}
        </tr>
      );
    });

    if (taskStart === false) {
      return (
        <div className="taskBox">
          <div className="taskInfo">
            <div className="taskTitle">
              <p>Task</p>
              <input
                required
                type="text"
                className="taskName"
                placeholder="Order Coffee Beans"
                onChange={() =>
                  this.handleTaskTitle(
                    document.querySelector('.taskName').value
                  )
                }
              />
            </div>
            <div className="taskDescBox">
              <textarea
                required
                className="taskDesc"
                placeholder="Process Description"
                onChange={() =>
                  this.handleTaskDesc(document.querySelector('.taskDesc').value)
                }
              />
            </div>
          </div>

          <div className="processBox">
            <div className="playButton">
              <i
                class="far fa-play-circle"
                onClick={() => this.handleTaskStart()}
              />
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
                <button className="unassignedBtn">
                  <i class="fas fa-cog" />
                  <p>Unassigned</p>
                </button>
                <div className="dropdown-content">
                  <button>
                    <p
                      onClick={() => this.handleAutoAssign(this.state.priority)}
                    >
                      Auto-Assign
                    </p>
                  </button>
                  <button
                    id="myBtn"
                    onClick={() => this.handleModal('myModal')}
                  >
                    <p>Select Workers</p>
                  </button>

                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span
                        className="close"
                        onClick={() => this.closeModal('myModal')}
                      >
                        &times;
                      </span>
                      {workerItems}
                      <button onClick={() => this.clearRadios()}>Clear</button>
                    </div>
                  </div>
                  <button
                    id="myBtn2"
                    onClick={() => this.handleModal('myModal2')}
                  >
                    <p>Schedule</p>
                  </button>
                  <div id="myModal2" className="modal2">
                    <div className="modal-content2">
                      <span
                        className="close"
                        onClick={() => this.closeModal('myModal2')}
                      >
                        &times;
                      </span>
                      <tr className="timeAllo">
                        {' '}
                        Time Allocation:{' '}
                        <input
                          type="time"
                          id="timeAllo"
                          name="timeAllo"
                          step="600"
                          onChange={() =>
                            this.handleTimeAllo(
                              document.getElementById('timeAllo').value
                            )
                          }
                          required
                        />{' '}
                      </tr>
                      <tr>
                        {' '}
                        Number of tasks:{' '}
                        <input
                          type="tasks"
                          id="taskAllo"
                          name="taskAllo"
                          min="1"
                          max="20"
                          onChange={() =>
                            this.handleTaskAllo(
                              document.getElementById('taskAllo').value
                            )
                          }
                          required
                        />{' '}
                      </tr>

                      <span class="note">
                        Choose how long should be spent on this task
                      </span>
                    </div>
                  </div>
                  <button onClick={() => this.handleArchive()}>
                    <p>Archive</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <TaskProcess
          handleTaskStart={this.handleTaskStart}
          taskTitle={taskTitle}
          taskDesc={taskDesc}
          assignedWorkers={+assignedWorkers}
          maximumWorkers={maximumWorkers}
          priority={priority}
          allocatedTime={+allocatedTime}
          tasks={tasks}
        />
      );
    }
  }
}

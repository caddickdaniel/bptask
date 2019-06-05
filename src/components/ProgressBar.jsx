import React, { Component } from 'react';

export default class ProgressBar extends Component {
  state = {
    count: 0,
    allocatedTime: 300
  };

  componentDidMount() {
    const { allocatedTime } = this.props;
    const hours = +allocatedTime.split('.')[0];
    const minsInHour = hours * 60;
    const mins = +allocatedTime.split('.').pop();
    const timeInSecs = (mins + minsInHour) * 60;

    this.myInterval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
      if (this.state.count <= timeInSecs) {
        document.querySelector('#myBar').style.width = `${(this.state.count /
          timeInSecs) *
          100}%`;
        console.log(hours, minsInHour, mins, timeInSecs);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    return (
      <div>
        <div id="myProgress">
          <div id="myBar" />
        </div>
      </div>
    );
  }
}

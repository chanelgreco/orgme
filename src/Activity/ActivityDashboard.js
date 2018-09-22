import React, { Component } from 'react';
import './App.css';

import { database } from '../firebase';
import ActivityForm from './ActivityForm';
import ActivityDisplayer from './ActivityDisplayer';

class ActivityDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      activity: '',
      duration: '',
      reports: []
    };
  }

  componentDidMount() {
    const reportsRef = database.ref('reports');
    reportsRef.on('value', snap => {
      let reports = snap.val();
      let newState = [];
      for (let report in reports) {
        newState.push({
          id: report,
          date: reports[report].date,
          activity: reports[report].activity,
          duration: reports[report].duration
        });
      }
      this.setState({
        reports: newState
      });
    });
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const reportRef = database.ref('reports');
    const report = {
      date: this.state.date,
      activity: this.state.activity,
      duration: this.state.duration
    };
    reportRef.push(report);
    this.setState({
      date: '',
      activity: '',
      duration: ''
    });
  };

  removeReport(reportId) {
    const reportRef = database.ref(`/reports/${reportId}`);
    reportRef.remove();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Orgme - Where you can organize your life
          </h1>
        </header>

        <ActivityForm
          date={this.state.date}
          activity={this.state.activity}
          duration={this.state.duration}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <ActivityDisplayer
          reports={this.state.reports}
          removeReport={this.removeReport}
        />
      </div>
    );
  }
}

export default ActivityDashboard;

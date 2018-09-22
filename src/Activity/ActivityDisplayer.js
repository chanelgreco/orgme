import React from 'react';
import Button from '@material-ui/core/Button';

const ActivityDisplayer = ({ reports, removeReport }) => {
  console.log(reports);
  return (
    <div>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <p>Date: {report.date}</p>
            <p>Activity: {report.activity}</p>
            <p>Duration: {report.duration}</p>
            <Button
              variant="contained"
              className="button"
              onClick={() => removeReport(report.id)}>
              Delete Report
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityDisplayer;

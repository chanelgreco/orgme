import React from 'react';

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
            <button onClick={() => removeReport(report.id)}>
              Delete Report
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityDisplayer;

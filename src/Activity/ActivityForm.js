import React from 'react';
import Button from '@material-ui/core/Button';

const ActivityForm = ({
  date,
  activity,
  duration,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className="ActivityForm">
      <form className="activity-form" onSubmit={handleSubmit}>
        <label>
          Date:{' '}
          <input type="text" name="date" value={date} onChange={handleChange} />
        </label>
        <label>
          Activity:{' '}
          <input
            type="text"
            name="activity"
            value={activity}
            onChange={handleChange}
          />
        </label>
        <label>
          Duration:{' '}
          <input
            type="text"
            name="duration"
            value={duration}
            onChange={handleChange}
          />
        </label>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ActivityForm;

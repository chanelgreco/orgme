import React from 'react';

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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ActivityForm;

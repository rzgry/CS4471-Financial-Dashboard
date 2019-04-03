import React from 'react';

const LastUpdated = ({ timestamp }) => (
  <div style={{ margin: '1em', marginBottom: '2em' }}>
    {timestamp && (
      <p style={{ float: 'right', color: 'gray' }}>
        {`Last updated: ${new Date(timestamp).toLocaleString()}`}
      </p>
    )}
  </div>
);

export default LastUpdated;

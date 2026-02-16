import React from 'react';

const Popup = ({ status }) => {
  // status can be 'hidden', 'entering', 'exiting'
  let className = '';
  if (status === 'entering') className = 'animate-in';
  else if (status === 'exiting') className = 'animate-out';

  return (
    <div id="popup" className={className} aria-hidden="true">
      ✓ Correct!
    </div>
  );
};

export default Popup;

import React from 'react';

// the main for installer
export default ({ ...props }) => {
  return (
    <div w="100%" {...props} justifyContent="center" alignItems="center">
      <p>
        Welcome to use{' '}
        <a target="_blank" href="https://labs.zoe.im/zoe-starter-react-app">
        zoe-starter-react-app
        </a>{' '}
        for application bundle!
      </p>
    </div>
  );
};

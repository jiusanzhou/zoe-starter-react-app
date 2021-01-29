import React from 'react';

// maxW ??? of page

export default ({ children, header = {}, footer = {}, ...props }) => {
  return (
    <div className="bg-gradient-to-r__ from-green-200 to-blue-300">
      {/* the main body for page */}
      <div as="main" className="" pt={['2em', '2.5em', '3em', '3.5em']} minH="100vh" d="flex">
        {children}
      </div>
    </div>
  );
};

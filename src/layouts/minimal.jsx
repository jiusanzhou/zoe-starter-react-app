import React from 'react';

export default ({ children, header = {}, footer = {}, ...props }) => {
    return (
      <div as="main" h="100vh" w="100vw">
        <div maxH="30rem" maxW="40rem" d="flex" {...props}>
          {children}
        </div>
      </div>
    );
};
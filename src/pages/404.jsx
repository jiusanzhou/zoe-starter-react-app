import React from 'react';

export default ({ location, history, title = '404：页面未找到!' }) => {
  return (
      <div>{title}</div>
  );
};

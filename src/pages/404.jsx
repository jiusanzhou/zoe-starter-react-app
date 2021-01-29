import React from 'react';

export default ({ location, history, title = '404：页面未找到!' }) => {
  return (
    <div w="100%">
      <div maxWidth="80em" p="1rem" margin="auto">
        <div w="sm" borderWidth="1px" rounded="lg" p='1rem'>
          <h3 size="sm">{title}</h3>
          <p mt="1em">
            URL: <code>{location.pathname}</code>
          </p>
          <div mt="1em" justifyContent="end">
            <button
              size="sm"
              onClick={() => {
                history.goBack();
              }}
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

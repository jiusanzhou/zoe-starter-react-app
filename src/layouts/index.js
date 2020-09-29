import React from 'react';

import empty from './empty';
import _default from './default';

// multi layout
const _layouts = {
  empty,
  default: _default,
};

export default ({ layout = 'empty', ...props }) => {
  // if layout is string create with or { name }
  let name;
  let _props = {};
  switch (typeof layout) {
    case 'string':
      name = layout
      _props = { ...props }
      break;
    case 'object':
      name = layout.name
      _props = { ...layout, ...props, name: null }
    default:
      break;
  }

  // create children in here???
  return React.createElement(_layouts[layout] || empty, _props)
};

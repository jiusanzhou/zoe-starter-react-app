import React from 'react';
import { h } from 'preact';

import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './layouts';

import routers from './routers';

export default  ({ ...props }) => {
  return <Switch>
    {/* register page and router at here */}
    {/* route with layout */}
    {routers.map(({ path, page, layout = 'empty', ...rprops }, idx) => (
      <Route
        key={`_${idx}`}
        exact
        path={path}
        component={props => (
          <Layout layout={layout}>
            {h(page, { ...props, ...props })}
          </Layout>
        )}
        {...rprops}
      />
    ))}

    {/* install 404 page */}
  </Switch>
}

import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Layout from './layouts';

import routers from './routers';

@withRouter
@inject('appStore')
@observer
export default class App extends React.Component {
  render() {
    // use register layout
    return (
      <Switch>
        {/* register page and router at here */}
        {/* route with layout */}
        {routers.map(({ path, page, layout = 'empty', ...rprops }, idx) => (
          <Route
            key={`_${idx}`}
            exact
            path={path}
            component={props => (
              <Layout layout={layout}>
                {React.createElement(page, { ...this.props, ...props })}
              </Layout>
            )}
            {...rprops}
          />
        ))}

        {/* install 404 page */}
      </Switch>
    );
  }
}

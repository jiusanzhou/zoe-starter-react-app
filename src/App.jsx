import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';

import { EventProvider } from './components/events';

import Layout from './layouts';
import routers from './routers';
import stores from "./stores";
import theme from "./styles/theme";

import "./styles/core.css"

// init stores if needed
Object.keys(stores).forEach((k) => stores[k].init && stores[k].init())

export default ({staticContext, ...mprops}) => {
  return <Provider {...stores}>
    <ChakraProvider theme={theme} portalZIndex="99999">
        <CSSReset />
        <ColorModeScript initialColorMode="light" />
        <EventProvider>
          <BrowserRouter basename={window.AppConfig && window.AppConfig.root}>
            <Switch>
              {routers.map(({ path, page, layout = 'empty', title, ...rprops }, idx) => (
                <Route key={`_${idx}`} exact path={path}
                  component={props => <Layout layout={layout} title={title}>
                      {React.createElement(page, { ...mprops, ...props })}
                    </Layout>}
                  {...rprops}
                />
              ))}
            </Switch>
          </BrowserRouter>
        </EventProvider>
    </ChakraProvider>
  </Provider>
}
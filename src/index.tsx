/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelmetProvider } from 'react-helmet-async';

// Import root app
import { App } from 'app';
import 'styles/global/style.css';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';

export const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE,
);

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Routes from './routes';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - EMS Example"
        defaultTitle="EMS Example"
        meta={[{ name: 'description', content: 'EMS Example' }]}
        title={'Oke fei'}
      />
      <Routes />
    </BrowserRouter>
  );
}

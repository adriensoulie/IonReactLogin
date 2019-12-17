import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Mes imports */
import "@codetrix-studio/capacitor-google-auth";
// eslint-disable-next-line
import { Plugins } from '@capacitor/core';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

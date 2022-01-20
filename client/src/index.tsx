import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { userStore } from './stores/userStore';
import { IAppContext } from './types';

export const AppContext = createContext<IAppContext>({ userStore });

ReactDOM.render(
  <AppContext.Provider value={{ userStore }}>
    <App />
  </AppContext.Provider>,
  document.getElementById('root')
);

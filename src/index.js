import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    display: flex;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`
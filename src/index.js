import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

// store.subscribe(() => {
//   console.log('[store state]', store.getState())
// })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

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
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from 'reduxUtils/store';
import App from './App';

const GlobalStyle = createGlobalStyle`
body {
  font-size:16px;
  font-family:'Roboto',sans-serif;
  font-weight:400,
}

h1,h2,h3,h4,h5,h6{
  font-family:'Raleway',sans-serif;
  font-weight:400,
}
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

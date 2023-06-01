import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import NiceModal from '@ebay/nice-modal-react';
import { createStore } from 'redux';
import rootReducer from './reducer';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NiceModal.Provider>
        <Router />
      </NiceModal.Provider>
    </ThemeProvider>
  </Provider>
);

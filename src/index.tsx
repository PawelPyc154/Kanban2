import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import mq from './theme/mediaQueries';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={{ mq }}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,

  document.getElementById('root'),
);

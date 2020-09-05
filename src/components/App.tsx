import React from 'react';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <div>rem</div>
      <GlobalStyle />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
}
body {
  color:white;
  box-sizing: border-box;
  background-color: #181818;
  font-size: 16px;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
a {
  text-decoration: none;
}

`;

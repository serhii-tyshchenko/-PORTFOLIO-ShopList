import React from 'react';
import { Header, Main, Footer } from 'pages/_Layout';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export { BaseLayout };

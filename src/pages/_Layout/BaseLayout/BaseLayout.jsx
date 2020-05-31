import React from 'react';
import { Header, Footer, Main } from 'pages/_Layout';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export { BaseLayout };

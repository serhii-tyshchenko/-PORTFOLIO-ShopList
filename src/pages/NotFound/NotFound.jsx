import React from 'react';
import { Link } from 'react-router-dom';
import { BaseLayout } from '../_Layout';

import './NotFound.scss';

const NotFound = () => (
  <BaseLayout>
    <div className="not-found__container">
      <h3 className="not-found__message">Page not found :(</h3>
      <Link to="/">To homepage</Link>
    </div>
  </BaseLayout>
);

export { NotFound };

import React from 'react';
import { ShoppingListContainer } from 'modules/data';
import { BaseLayout } from '../_Layout';
import './Home.scss';

const Home = () => (
  <BaseLayout>
    <div className="list-wrapper">
      <ShoppingListContainer />
    </div>
  </BaseLayout>
);

export { Home };

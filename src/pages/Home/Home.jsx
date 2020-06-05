import React from 'react';
import { ShoppingListContainer, SuggestionListContainer } from 'modules/data';
import { BaseLayout } from '../_Layout';
import './Home.scss';

const Home = () => (
  <BaseLayout>
    <div className="list-wrapper">
      <ShoppingListContainer />
      <SuggestionListContainer />
    </div>
  </BaseLayout>
);

export { Home };

import React from 'react';
import { ToDoListContainer } from 'modules/todos';
import { BaseLayout } from '../_Layout';

const Home = () => (
  <BaseLayout>
    <h1>ToDo List</h1>
    <ToDoListContainer />
  </BaseLayout>
);

export { Home };

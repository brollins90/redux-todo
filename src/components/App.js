import React, {PropTypes} from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibileTodoList from '../containers/VisibileTodoList';

const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibileTodoList />
      <Footer />
    </div>
  );
};

export default App;

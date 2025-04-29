import { Provider } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import TodoContainer from '../containers/Todo';
import { todoReducer } from '../reducers/todoReducer';

export function App() {
  const middleware = [thunk];
  const store = createStore(todoReducer, applyMiddleware(...middleware));
  return (
    <Provider store={store}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;

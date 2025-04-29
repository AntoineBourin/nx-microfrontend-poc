import { configureStore } from '@reduxjs/toolkit';
import * as React from 'react';
import { lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { reducer } from '../reducers';
import HeaderContainer from './header/header-container';

const About = lazy(() => import('about/Module'));

export function App() {
  const store = configureStore({
    reducer: reducer,
  });

  return (
    <Provider store={store}>
      <HeaderContainer />
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </React.Suspense>
    </Provider>
  );
}

export default App;

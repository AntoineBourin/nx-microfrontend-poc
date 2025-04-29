import { Route, Routes } from 'react-router-dom';
import HomeContainer from './home/home-container';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
    </Routes>
  );
}

export default App;

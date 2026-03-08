import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Coin from '../components/Coin';
import Root from '../components/Root';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/coin/:id" element={<Coin />} ></Route>
      </Route>
    </Routes>
  );
}

export default RoutesPages;
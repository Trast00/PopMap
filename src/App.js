import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { fetchData } from './redux/country/countryReducer';

const App = () => {
  const listCountry = useSelector((state) => state.countryReducer.listCountries);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!listCountry) {
      dispatch(fetchData());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:topLevelDomain" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;

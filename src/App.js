import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail';
import { Routes ,Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:topLevelDomain' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

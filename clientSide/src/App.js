// import logo from './logo.svg';
import './App.css';
import DashBoard from './pages/DashBoard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={DashBoard}/>
      </Routes>
    </Router>
  );
}

export default App;

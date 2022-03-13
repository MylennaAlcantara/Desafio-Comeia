import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import {Register} from './pages/Register'

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SignUp" element={<Register />}/>
      </Routes>

    </div>
  );
}

export default App;

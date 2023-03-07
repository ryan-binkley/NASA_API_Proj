import './App.css';
import { Routes, Route } from 'react-router-dom'
import Volcano from './components/volcano.js'
import LeafLet from './components/leafLet_page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LeafLet />}/>
        <Route path='/volcano/' element={<Volcano />}/>
      </Routes>
    </div>
  );
}

export default App;

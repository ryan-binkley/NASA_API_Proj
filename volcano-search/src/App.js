import './App.css';
import { Routes, Route } from 'react-router-dom'
import Volcano from './components/volcano.js'
import LeafLet from './components/leafLet_page';
import React, { useState } from 'react';
import HeaderComponent from './components/header_Component/header_Component';
import AboutPageComponent from './components/about_page_component/about_page_component';


export const VolcanoContext = React.createContext([]);


function App() {

  const [volcano, setVolcano] = useState('volcano state, changes on button click');

  return (
    <div className="App">
      <VolcanoContext.Provider value={{ volcano, setVolcano }}>
        <HeaderComponent />
        <AboutPageComponent/>
      </VolcanoContext.Provider>




      <Routes>
        <Route path='/' element={<LeafLet />} />
        <Route path='/volcano/' element={<Volcano />} />
      </Routes>
    </div>
  );
}

export default App;

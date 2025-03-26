import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
// import CardAll from './Components/CardAll/CardAll';
import Value from './Components/Value/Value';
import Mission from './Components/Mission/Mission';
import Vission from './Components/Vission/Vission';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
      <div>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vission" element={<Vission/>} /> 
          <Route path="/value" element={<Value />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

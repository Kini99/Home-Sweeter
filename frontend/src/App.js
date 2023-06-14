import './App.css';
import React from 'react';
import Buyproduct from "./Pages/BuyProduct/Buyproduct"
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <Buyproduct/>
      <MainRoutes />

    </div>
  );
}

export default App;

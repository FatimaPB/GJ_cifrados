import React, { useState, useEffect } from 'react';
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';   // Estilo de tema (puedes cambiar el tema)
import 'primereact/resources/primereact.min.css';           // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';                         // Iconos de PrimeIcons
import 'primeflex/primeflex.css';                           // (Opcional) PrimeFlex para diseño


import Header from './Componentes/Header';
import Home from './Componentes/Home';
import CifradoCesar from './Componentes/CifradoCesar';
import CifradoEscitala from './Componentes/CifradoEscitala';
import GuiaUso from './Componentes/GuiaUso';



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cesar" element={<CifradoCesar />} />
        <Route path="/escitala" element={< CifradoEscitala/>} />
        <Route path="/guia" element={< GuiaUso/>} />
        <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    </Router>
  );
}

export default App;

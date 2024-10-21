// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import Calendario from './pages/Calendario';
import Aulas from './pages/Aulas';
import Chat from './pages/Chat';
import AlunoMarketo from './pages/AlunoMarketo';
import Noticias from './pages/Noticias';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Página Inicial</Link>
          <Link to="/calendario">Calendário</Link>
          <Link to="/aulas">Aulas</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/alunomarketo">Aluno Marketo</Link>
          <Link to="/noticias">Notícias</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/alunomarketo" element={<AlunoMarketo />} />
            <Route path="/noticias" element={<Noticias />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

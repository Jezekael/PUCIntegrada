// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import Calendario from './pages/Calendario';
import Aulas from './pages/Aulas';
import Chat from './pages/Chat';
import AlunoMarketo from './pages/AlunoMarketo';
import Noticias from './pages/Noticias';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Página Inicial</Link></li>
            <li><Link to="/calendario">Calendário</Link></li>
            <li><Link to="/aulas">Aulas</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/alunomarketo">Aluno Marketo</Link></li>
            <li><Link to="/noticias">Notícias</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/alunomarketo" element={<AlunoMarketo />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

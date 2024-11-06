import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import Calendario from './pages/Calendario';
import Aulas from './pages/Aulas';
import Chat from './pages/Chat';
import AlunoMarketo from './pages/AlunoMarketo';
import Noticias from './pages/Noticias';
import Perfil from './pages/Perfil';
import './App.css';
import HomeLogo from './assets/Home.png'; // Import your logo file here
import ProfileLogo from './assets/Profile.png'; // Import your logo file here

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">
            <img src={HomeLogo} alt="Logo" className="nav-logo" /> {/* Logo for Página Inicial */}
          </Link>
          <Link to="/calendario">Calendário</Link>
          <Link to="/aulas">Aulas</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/alunomarketo">Aluno Marketo</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/perfil">
            <img src={ProfileLogo} alt="Logo" className="nav-logo" /> {/* Logo for Perfil */}
          </Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/alunomarketo" element={<AlunoMarketo />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

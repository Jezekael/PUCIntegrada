// pages/Perfil.js
import React from 'react';

function Perfil() {
  // Sample user data (can be replaced by props or fetched data)
  const user = {
    name: 'Jezekael',
    yearOfStudy: '3rd Year',
    department: 'Telecommunications - Cybersecurity',
    dateOfBirth: '25/01/2001',
    email: 'jezekael@example.com',
    university: 'PUC-Rio',
    profilePicture: 'https://via.placeholder.com/150',
  };

  return (
    <div style={styles.container}>
      <h1>Perfil do Estudante</h1>
      <div style={styles.profileCard}>
        <img
          src={user.profilePicture}
          alt="User"
          style={styles.profilePicture}
        />
        <div style={styles.infoContainer}>
          <h2 style={styles.name}>{user.name}</h2>
          <p><strong>Ano de Estudo:</strong> {user.yearOfStudy}</p>
          <p><strong>Departamento:</strong> {user.department}</p>
          <p><strong>Data de Nascimento:</strong> {user.dateOfBirth}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Universidade:</strong> {user.university}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '600px',
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
    objectFit: 'cover',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    marginBottom: '10px',
    fontSize: '1.8em',
    color: '#333',
  },
};

export default Perfil;

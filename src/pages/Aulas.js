// pages/Aulas.js
import React from 'react';

function Aulas() {
  const classInfo = {
    name: 'Programação Avançada',
    department: 'Departamento de Computação',
    level: 'Mestrado',
    teachers: ['Prof. João Silva', 'Prof. Ana Martins'],
    semester: '2º Semestre',
    schedule: 'Segunda e Quarta, 14:00 - 16:00',
    credits: 4,
    description: 'Este curso aborda tópicos avançados em programação, incluindo estrutura de dados complexas, algoritmos de alto desempenho e desenvolvimento de software de grande escala.',
  };

  return (
    <div style={styles.container}>
      <h1>Aulas</h1>
      <div style={styles.classBox}>
        <h2>{classInfo.name}</h2>
        <p><strong>Departamento:</strong> {classInfo.department}</p>
        <p><strong>Nível:</strong> {classInfo.level}</p>
        <p><strong>Professores:</strong> {classInfo.teachers.join(', ')}</p>
        <p><strong>Semestre:</strong> {classInfo.semester}</p>
        <p><strong>Horário:</strong> {classInfo.schedule}</p>
        <p><strong>Créditos:</strong> {classInfo.credits}</p>
        <p><strong>Descrição:</strong> {classInfo.description}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  classBox: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default Aulas;

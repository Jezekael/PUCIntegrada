// pages/AlunoMarketo.js
import React, { useState } from 'react';

function AlunoMarketo() {
  const itemsForSale = [
    {
      title: 'Calculadora Científica',
      description: 'Calculadora gráfica para estudantes de engenharia e ciências. Inclui manual e pilhas novas.',
      price: 'R$150',
      sellerName: 'Ana Souza',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Livros de Engenharia',
      description: 'Conjunto de livros de engenharia usados, em bom estado. Inclui livros de cálculo, física e eletrônica.',
      price: 'R$200',
      sellerName: 'Lucas Pereira',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Notebook Dell',
      description: 'Notebook Dell Inspiron, usado, ideal para estudos e projetos. 8GB RAM, 256GB SSD.',
      price: 'R$2,500',
      sellerName: 'Mariana Lima',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div style={styles.container}>
      <h1>Aluno Marketo</h1>
      <p>Compre e venda itens entre os alunos.</p>
      <div style={styles.itemsContainer}>
        {itemsForSale.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const descriptionToShow = isExpanded
            ? item.description
            : item.description.length > 80
            ? item.description.slice(0, 80) + '...'
            : item.description;

          return (
            <div
              key={index}
              style={{
                ...styles.itemCard,
                ...(isExpanded ? styles.expandedItemCard : {}),
              }}
              onClick={() => handleExpand(index)}
            >
              <div
                style={{
                  ...styles.imageContainer,
                  ...(isExpanded ? styles.expandedImageContainer : {}),
                }}
              >
                <img src={item.imageUrl} alt={item.title} style={styles.image} />
              </div>
              <div style={styles.textContainer}>
                <h2>{item.title}</h2>
                <p><strong>Vendedor:</strong> {item.sellerName}</p>
                <p style={styles.description}>{descriptionToShow}</p>
                <p style={styles.price}>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px',
  },
  itemCard: {
    display: 'flex',
    alignItems: 'flex-start',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  expandedItemCard: {
    backgroundColor: '#f9f9f9',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  imageContainer: {
    minWidth: '150px',
    minHeight: '150px',
    overflow: 'hidden',
    borderRadius: '8px',
    marginRight: '16px',
    transition: 'all 0.3s ease',
  },
  expandedImageContainer: {
    minWidth: '200px',
    minHeight: '200px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    flex: '1',
  },
  description: {
    color: '#666',
    marginBottom: '8px',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.1em',
    color: '#2E8B57',
  },
};

export default AlunoMarketo;

// pages/Noticias.js
import React, { useState } from 'react';

function Noticias() {
  const news = [
    {
      title: 'Título da Notícia 1',
      date: '13 de Novembro de 2024',
      text: 'Este é um texto longo que será cortado caso ultrapasse o limite definido. Ao clicar na notícia, o restante do texto será mostrado, juntamente com uma imagem maior. Este conteúdo adicional proporciona mais informações para os leitores interessados.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Título da Notícia 2',
      date: '12 de Novembro de 2024',
      text: 'Aqui está outro texto longo que também será encurtado inicialmente. Ao clicar, o texto completo ficará visível e a imagem ficará maior, dando mais destaque para esta notícia específica.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div style={styles.container}>
      <h1>Notícias</h1>
      <p>Acompanhe as últimas notícias da universidade.</p>
      <div style={styles.newsContainer}>
        {news.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const textToShow = isExpanded ? item.text : item.text.slice(0, 100) + (item.text.length > 100 ? '...' : '');

          return (
            <div
              key={index}
              style={{
                ...styles.newsItem,
                ...(isExpanded ? styles.expandedNewsItem : {}),
              }}
              onClick={() => handleExpand(index)}
            >
              <div style={{
                ...styles.imageContainer,
                ...(isExpanded ? styles.expandedImageContainer : {}),
              }}>
                <img src={item.imageUrl} alt="Notícia" style={styles.image} />
              </div>
              <div style={styles.textContainer}>
                <h2>{item.title}</h2>
                <p style={styles.date}>{item.date}</p>
                <p>{textToShow}</p>
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
  newsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px',
  },
  newsItem: {
    display: 'flex',
    alignItems: 'flex-start',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  expandedNewsItem: {
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
  date: {
    fontSize: '0.9em',
    color: '#666',
    marginBottom: '8px',
  },
};

export default Noticias;

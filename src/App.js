// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Магазин Lamoda</h1>
      <ProductList />
    </div>
  );
};

export default App;
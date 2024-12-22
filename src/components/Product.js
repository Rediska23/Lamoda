import React from 'react';
import styles from '../styles/ProductList.module.scss';

const Product = ({ product }) => (
  <div className={styles.product}>
    <img src={product.imageUrl} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Цвет: {product.color}</p>
    <p>Категория: {product.category}</p>
    <p>Цена: ${product.price}</p>
    <p>Рейтинг: {product.rating}</p>
  </div>
);

export default Product;
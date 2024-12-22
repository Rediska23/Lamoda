import React, { useState } from 'react';
import generateProducts from '../utils/generateProducts';
import FilteredProductList from './FilteredProductList';
import styles from '../styles/ProductList.module.scss';

const ProductList = () => {
  const [products] = useState(generateProducts());
  const [search, setSearch] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 9999]);
  const [sortOrder, setSortOrder] = useState('priceAsc');

  const searchFilter = (product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase());

  const colorFilter = (product) =>
    selectedColors.length === 0 || selectedColors.includes(product.color);

  const priceFilter = (product) =>
    product.price >= priceRange[0] && product.price <= priceRange[1];

  const filters = [searchFilter, colorFilter, priceFilter];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'ratingDesc':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((product) =>
    filters.every((filter) => filter(product))
  );

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.colors}>
          <h4>Цвета</h4>
          {['Красный', 'Синий', 'Зеленый', 'Желтый', 'Черный'].map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={(e) => {
                  const updatedColors = e.target.checked
                    ? [...selectedColors, color]
                    : selectedColors.filter((c) => c !== color);
                  setSelectedColors(updatedColors);
                }}
              />
              {color}
            </label>
          ))}
        </div>
        <div className={styles.priceRange}>
          <h4>Диапазон цен</h4>
          <input
            type="number"
            placeholder="от"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
          />
          <input
            type="number"
            placeholder="до"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>
        <div className={styles.sortOrder}>
          <h4>Сортировка</h4>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="priceAsc">Цена: по возрастанию</option>
            <option value="priceDesc">Цена: по убыванию</option>
            <option value="ratingDesc">Рейтинг: по убыванию</option>
          </select>
        </div>
      </div>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.productCount}>
        Найдено товаров: {filteredProducts.length}
      </div>

      <FilteredProductList products={filteredProducts} filters={filters} />
    </div>
  );
};

export default ProductList;
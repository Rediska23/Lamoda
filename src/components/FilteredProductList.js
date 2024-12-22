import React, { useMemo } from 'react';
import Product from './Product';
import styles from '../styles/ProductList.module.scss';

const FilteredProductList = ({ products, filters }) => {
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      filters.every((filter) => filter(product))
    );
  }, [products, filters]);

  return (
    <div className={styles.productList}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p>По вашему запросу ничего не найдено.</p>
      )}
    </div>
  );
};

export default FilteredProductList;
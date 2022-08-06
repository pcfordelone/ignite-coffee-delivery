import React, { useState } from 'react'
import { productsList } from '../..'
import { IProduct, Product } from '../Product'

import { ProductsContainer } from './styles'

export const Products: React.FC = () => {
  const [products, setProduct] = useState<IProduct[]>(productsList)

  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>

      <div className="productsContainer">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </ProductsContainer>
  )
}

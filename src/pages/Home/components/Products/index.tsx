import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { ProductItem, ProductsContainer } from './styles'

import Coffee01Img from '../../../../assets/coffee01.png'

export const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>

      <div className="productsContainer">
        <ProductItem>
          <img src={Coffee01Img} alt="" />
          <span>Tradicional</span>
          <strong>Expresso Tradicional</strong>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div className="footer">
            <p>
              <small>R$</small> 9,90
            </p>
            <div>
              <div className="formgroup">
                <input type="number" value={1} />
              </div>
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
        </ProductItem>
        <ProductItem>
          <img src={Coffee01Img} alt="" />
          <span>Tradicional</span>
          <strong>Expresso Tradicional</strong>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div className="footer">
            <p>
              <small>R$</small> 9,90
            </p>
            <div>
              <div className="formgroup">
                <input type="number" value={1} />
              </div>
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
        </ProductItem>
        <ProductItem>
          <img src={Coffee01Img} alt="" />
          <span>Tradicional</span>
          <strong>Expresso Tradicional</strong>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div className="footer">
            <p>
              <small>R$</small> 9,90
            </p>
            <div>
              <div className="formgroup">
                <input type="number" value={1} />
              </div>
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
        </ProductItem>
        <ProductItem>
          <img src={Coffee01Img} alt="" />
          <span>Tradicional</span>
          <strong>Expresso Tradicional</strong>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div className="footer">
            <p>
              <small>R$</small> 9,90
            </p>
            <div>
              <div className="formgroup">
                <input type="number" value={1} />
              </div>
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
        </ProductItem>
      </div>
    </ProductsContainer>
  )
}

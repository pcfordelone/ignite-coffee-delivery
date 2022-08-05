import React from 'react'
import { Trash } from 'phosphor-react'
import { Shipping } from './components/Shipping'

import { CheckoutContainer, OrderContainer, OrderInfoContainer } from './styles'
import CoffeeImg01 from '../../assets/coffee01.png'
import CoffeeImg02 from '../../assets/coffee02.png'

export const CheckoutPage: React.FC = () => {
  return (
    <CheckoutContainer>
      <Shipping />

      <OrderInfoContainer>
        <h1>Cafés selecionados</h1>

        <OrderContainer>
          <div className="order-item">
            <img src={CoffeeImg01} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <div className="formgroup">
                <input type="number" value={1} />
                <button>
                  <Trash size={18} />
                  Remover
                </button>
              </div>
            </div>
            <strong>R$ 9,99</strong>
          </div>

          <div className="order-item">
            <img src={CoffeeImg01} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <div className="formgroup">
                <input type="number" value={1} />
                <button>
                  <Trash size={18} />
                  Remover
                </button>
              </div>
            </div>
            <strong>R$ 9,99</strong>
          </div>

          <div className="order-totals">
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div className="order-total">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>

            <button>Confirmar Pedido</button>
          </div>
        </OrderContainer>
      </OrderInfoContainer>
    </CheckoutContainer>
  )
}

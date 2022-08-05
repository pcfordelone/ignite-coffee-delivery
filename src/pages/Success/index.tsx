import React from 'react'

import { Icon, SuccessContainer } from './styles'
import SuccessImg from '../../assets/checkout-image.svg'
import { CurrencyDollar, MapPin, ShoppingCart, Timer } from 'phosphor-react'

export const SuccessPage: React.FC = () => {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="content">
        <div className="order-info">
          <div className="order-item">
            <Icon variant="purple">
              <MapPin className="icon" size={26} weight="fill" />
            </Icon>
            <p>
              Entrega em{' '}
              <strong>
                Rua João Daniel Martinelli, 102
                <br />
              </strong>
              Farrapos Porto Alegre, RS
            </p>
          </div>

          <div className="order-item">
            <Icon variant="yellow">
              <Timer className="icon" size={26} weight="fill" />
            </Icon>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>

          <div className="order-item">
            <Icon variant="orange">
              <CurrencyDollar className="icon" size={26} weight="fill" />
            </Icon>
            <p>
              Pagamento na entrega
              <br />
              <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </div>
        <div>
          <img src={SuccessImg} alt="" />
        </div>
      </div>
    </SuccessContainer>
  )
}

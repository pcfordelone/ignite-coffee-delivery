import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Icon, SuccessContainer } from './styles'
import SuccessImg from '../../assets/checkout-image.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Order } from '../Checkout/interfaces'
import { useCart } from '../../contexts/CartContext/useCart'

export const SuccessPage: React.FC = () => {
  const [order, setOrder] = useState<Order>()
  const { id } = useParams()

  const { resetCart } = useCart()

  useEffect(() => {
    const localstorageOrder = localStorage.getItem(
      `@coffee-delivery-1.0.0:order-${id}`,
    )

    if (localstorageOrder) {
      setOrder(JSON.parse(localstorageOrder))
      resetCart()
    }
  }, [])

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
                {`${order?.shippingData.formAddress}, ${order?.shippingData.formNumber}`}
                {order?.shippingData.formComplement &&
                  `, ${order?.shippingData.formComplement}`}
                <br />
                {`${order?.shippingData.formDistrict} - ${order?.shippingData.formCity}/${order?.shippingData.formUf}`}
              </strong>
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
              <strong>
                {order?.paymentMethod === 'credit' && 'Cartão de Crédito'}
                {order?.paymentMethod === 'debit' && 'Cartão de Débito'}
                {order?.paymentMethod === 'cash' && 'Dinheiro'}
              </strong>
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

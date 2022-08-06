import React, { useEffect, useState } from 'react'
import { Shipping } from './components/Shipping'
import { v4 as uuidv4 } from 'uuid'

import { useCart } from '../../contexts/CartContext/useCart'
import { OrderItem } from './components/OrderItem'
import { PaymentMethods } from './components/PaymentMethods'

import { FormProvider, useForm } from 'react-hook-form'

import {
  CheckoutContainer,
  CheckoutInfoContainer,
  OrderContainer,
  OrderInfoContainer,
} from './styles'

import { Order, PaymentMethod, ShippingFormData } from './interfaces'
import { useNavigate } from 'react-router-dom'
import { notify } from '../../utils/notification'

export const CheckoutPage: React.FC = () => {
  const { cartProducts } = useCart()
  const [total, setTotal] = useState<number>(0)
  const [paymentMethod, setPaymentMethod] = useState<
    PaymentMethod | undefined
  >()
  const navigate = useNavigate()

  console.log(paymentMethod)

  const shippingForm = useForm<ShippingFormData>({
    defaultValues: {
      formCep: '',
      formAddress: '',
      formNumber: '',
      formComplement: '',
      formDistrict: '',
      formCity: '',
      formUf: '',
    },
  })

  const { handleSubmit } = shippingForm

  const handleNewOrder = (data: ShippingFormData) => {
    if (!paymentMethod) {
      notify('É necessário escolher um meio de pagamento', 'danger')
      return
    }

    const newOrder: Order = {
      id: uuidv4(),
      shippingData: data,
      products: cartProducts,
      paymentMethod: paymentMethod as PaymentMethod,
    }

    localStorage.setItem(
      `@coffee-delivery-1.0.0:order-${newOrder.id}`,
      JSON.stringify(newOrder),
    )

    navigate(`/sucesso/${newOrder.id}`)
  }

  const catchPaymentMethod = (paymentMethod: PaymentMethod) => {
    setPaymentMethod(paymentMethod)
  }

  useEffect(() => {
    let newTotal = 0

    cartProducts.map((product) => {
      return (newTotal += product.amount * product.price)
    })

    setTotal(newTotal)
  }, [cartProducts])

  return (
    <CheckoutContainer>
      <CheckoutInfoContainer>
        <FormProvider {...shippingForm}>
          <Shipping />
        </FormProvider>
        <PaymentMethods
          activePaymentMethod={paymentMethod}
          handleSetPaymentMethod={catchPaymentMethod}
        />
      </CheckoutInfoContainer>

      <OrderInfoContainer>
        <h1>Cafés selecionados</h1>

        <OrderContainer>
          {cartProducts.map((product) => (
            <OrderItem product={product} key={product.id} />
          ))}
          <div className="order-totals">
            <div>
              <p>Total de itens</p>
              <span>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total)}
              </span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div className="order-total">
              <strong>Total</strong>
              <strong>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total + 3.5)}
              </strong>
            </div>

            <button
              className="order-btn"
              onClick={handleSubmit(handleNewOrder)}
            >
              Confirmar Pedido
            </button>
          </div>
        </OrderContainer>
      </OrderInfoContainer>
    </CheckoutContainer>
  )
}

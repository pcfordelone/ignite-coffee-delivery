import { Cardholder, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethod } from '../../interfaces'
import { Button, PaymentMethodsContainer } from './styles'

interface PaymentMethodProps {
  handleSetPaymentMethod: (paymentMethod: PaymentMethod) => void
  activePaymentMethod?: PaymentMethod
}

export const PaymentMethods = ({
  handleSetPaymentMethod,
  activePaymentMethod,
}: PaymentMethodProps) => {
  console.log(activePaymentMethod)
  return (
    <PaymentMethodsContainer>
      <header>
        <span>
          <CurrencyDollar size={32} color="#8047F8" />
        </span>
        <div className="payment-title">
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>
      <div className="payment-methods">
        <Button
          className={activePaymentMethod === 'credit' ? 'active' : ''}
          onClick={() => handleSetPaymentMethod('credit')}
        >
          <CreditCard size={22} color="#8047F8" />
          Cartão de Crédito
        </Button>
        <Button
          className={activePaymentMethod === 'debit' ? 'active' : ''}
          onClick={() => handleSetPaymentMethod('debit')}
        >
          <Cardholder size={22} color="#8047F8" />
          Cartão de Débito
        </Button>
        <Button
          className={activePaymentMethod === 'cash' ? 'active' : ''}
          onClick={() => handleSetPaymentMethod('cash')}
        >
          <Money size={22} color="#8047F8" />
          Dinheiro
        </Button>
      </div>
    </PaymentMethodsContainer>
  )
}

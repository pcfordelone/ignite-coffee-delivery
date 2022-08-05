import {
  Cardholder,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Button, ShippingContainer } from './styles'

export const Shipping = () => {
  return (
    <ShippingContainer>
      <h1>Complete seu pedido</h1>

      <div className="shipping-info">
        <header>
          <span>
            <MapPinLine size={32} />
          </span>
          <div className="shipping-title">
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>
        <form>
          <div className="form-group">
            <input type="text" placeholder="CEP" />
          </div>
          <div className="form-group">
            <input className="form-street" type="text" placeholder="Rua" />
          </div>
          <div className="form-group">
            <input type="number" placeholder="Número" />
            <input
              className="form-complement"
              type="text"
              placeholder="Complemento"
            />
            <span>
              <i>Opcional</i>
            </span>
          </div>
          <div className="form-group">
            <input className="form-district" type="text" placeholder="Bairro" />
            <input className="form-city" type="text" placeholder="Cidade" />
            <input className="form-uf" type="text" placeholder="UF" />
          </div>
        </form>
      </div>
      <div className="payment-info">
        <header>
          <span>
            <CurrencyDollar size={32} color="#8047F8" />
          </span>
          <div className="payment-title">
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>
        <div className="payment-methods">
          <Button>
            <CreditCard size={22} color="#8047F8" />
            Cartão de Crédito
          </Button>
          <Button>
            <Cardholder size={22} color="#8047F8" />
            Cartão de Débito
          </Button>
          <Button>
            <Money size={22} color="#8047F8" />
            Dinheiro
          </Button>
        </div>
      </div>
    </ShippingContainer>
  )
}

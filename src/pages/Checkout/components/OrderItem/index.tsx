import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CartProduct } from '../../../../contexts/CartContext/interfaces'
import { useCart } from '../../../../contexts/CartContext/useCart'
import { OrderItemContainer } from './styles'

interface OrderItemProps {
  product: CartProduct
}

export const OrderItem = ({ product }: OrderItemProps) => {
  const { rmProduct, updateProduct } = useCart()
  const [amount, setAmount] = useState<number>(product.amount)

  const handleChangeAmount = (type: string) => {
    if (type === 'increase') {
      setAmount((state) => (state += 1))
      return
    }
    setAmount((state) => (state -= 1))
    updateProduct(product.id, amount)
  }

  useEffect(() => {
    if (amount <= 0) {
      rmProduct(product.id)
      return
    }
    updateProduct(product.id, amount)
  }, [amount])

  return (
    <OrderItemContainer key={product.id}>
      <img src={product.avatar} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <div className="formgroup">
          <button
            className="decrease-amount-btn"
            onClick={() => handleChangeAmount('decrease')}
          >
            -
          </button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button
            className="increase-amount-btn"
            onClick={() => handleChangeAmount('increase')}
          >
            +
          </button>
          <button onClick={() => rmProduct(product.id)}>
            <Trash size={18} />
            Remover
          </button>
        </div>
      </div>
      <strong>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(product.price)}
        <small>
          (
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price * product.amount)}
          )
        </small>
      </strong>
    </OrderItemContainer>
  )
}

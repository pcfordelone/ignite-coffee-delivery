import { useContext, useState } from 'react'

import { ShoppingCart } from 'phosphor-react'
import { ProductItem } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export interface IProduct {
  id: string
  name: string
  description: string
  avatar: string
  price: number
}

interface ProductProps {
  product: IProduct
}

export const Product = ({ product }: ProductProps) => {
  const [amount, setAmount] = useState<number>(1)
  const { addProduct } = useContext(CartContext)

  const handleChangeAmount = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setAmount((state) => (state += 1))
      return
    }

    amount >= 2 && setAmount((state) => (state -= 1))
  }

  const handleAddProductCart = () => {
    const newProduct = {
      id: product.id,
      name: product.name,
      avatar: product.avatar,
      price: product.price,
      amount,
    }

    addProduct(newProduct)
    setAmount(1)
  }

  return (
    <ProductItem>
      <img src={product.avatar} alt="" />
      <span>Tradicional</span>
      <strong>{product.name}</strong>
      <p>{product.description}</p>
      <div className="footer">
        <p>
          <small>R$</small>
          {String(
            Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price),
          )
            .replace('R$', '')
            .replace(' ', '')}
        </p>
        <div>
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
              min={1}
            />
            <button
              className="increase-amount-btn"
              onClick={() => handleChangeAmount('increase')}
            >
              +
            </button>
          </div>
          <button className="add-item-cart" onClick={handleAddProductCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </ProductItem>
  )
}

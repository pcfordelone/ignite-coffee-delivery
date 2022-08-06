import React, { MouseEvent, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'

import LogoImg from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../contexts/CartContext/useCart'
import { notify } from '../../utils/notification'

export const Header: React.FC = () => {
  const [cartAmountItems, setCartAmountItems] = useState<number>(0)
  const { cartProducts } = useCart()
  const navigate = useNavigate()

  const handleCartClick = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault()

    if (cartAmountItems > 0) {
      navigate('/checkout')
      return
    }

    notify('Inclua pelo menos um produto para prosseguir', 'info')
  }

  useEffect(() => {
    let toAddAmountItems = 0

    cartProducts.map((product) => {
      return (toAddAmountItems += product.amount)
    })

    setCartAmountItems(toAddAmountItems)
  }, [cartProducts])

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoImg} alt="" />
      </Link>
      <nav>
        <span>
          <MapPin size={22} color="#4B2995" weight="fill" />
          São Paulo, SP
        </span>
        <NavLink className="cart" to="/checkout" onClick={handleCartClick}>
          <ShoppingCart size={22} weight="fill" />
          {cartAmountItems > 0 && (
            <span className="cartItemsLenght">{cartAmountItems}</span>
          )}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

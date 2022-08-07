import React, { MouseEvent, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'

import LogoImg from '../../assets/logo-coffee-delivery.png'
import { MapPin, Moon, ShoppingCart, Sun } from 'phosphor-react'
import { useCart } from '../../contexts/CartContext/useCart'
import { notify } from '../../utils/notification'
import { useTheme } from '../../contexts/ThemeContext/useTheme'

export const Header: React.FC = () => {
  const [cartAmountItems, setCartAmountItems] = useState<number>(0)
  const { cartProducts } = useCart()
  const navigate = useNavigate()

  const { toggleTheme, actualTheme } = useTheme()

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
        <button onClick={toggleTheme}>
          {actualTheme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}
        </button>
        <span>
          <MapPin size={22} weight="fill" />
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

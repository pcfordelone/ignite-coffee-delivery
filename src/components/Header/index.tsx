import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import LogoImg from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="" />
      <nav>
        <span>
          <MapPin size={22} color="#4B2995" weight="fill" />
          São Paulo, SP
        </span>
        <NavLink className="cart" to="/cart">
          <ShoppingCart size={22} weight="fill" />
          <span className="cartItemsLenght">3</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

import React from 'react'
import { Banner } from './components/Banner'
import { Products } from './components/Products'

import { HomeContainer } from './styles'

export const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Banner />
      <Products />
    </HomeContainer>
  )
}

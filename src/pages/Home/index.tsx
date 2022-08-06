import React, { useContext, useState } from 'react'
import { Banner } from './components/Banner'
import { Products } from './components/Products'

import { HomeContainer } from './styles'
import { v4 as uuidv4 } from 'uuid'
import { IProduct } from './components/Product'
import { CartContext } from '../../contexts/CartContext'

export const productsList: IProduct[] = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    avatar: '/images/coffee01.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    avatar: '/images/coffee02.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    avatar: '/images/coffee03.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    avatar: '/images/coffee04.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    avatar: '/images/coffee05.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    avatar: '/images/coffee06.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    avatar: '/images/coffee07.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    avatar: '/images/coffee08.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    avatar: '/images/coffee09.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    avatar: '/images/coffee10.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    avatar: '/images/coffee11.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    avatar: '/images/coffee12.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    avatar: '/images/coffee13.png',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    avatar: '/images/coffee14.png',
    price: 9.9,
  },
]

export const HomePage: React.FC = () => {
  const { cartProducts } = useContext(CartContext)

  return (
    <HomeContainer>
      <Banner />
      <Products />
    </HomeContainer>
  )
}

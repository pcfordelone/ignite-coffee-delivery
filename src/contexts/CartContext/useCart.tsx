import { useContext } from 'react'
import { CartContext } from '.'

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}

import { ReactNode, useState } from 'react'
import { CartContext } from '.'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { notify } from '../../utils/notification'
import { CartProduct } from './interfaces'

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const addProduct = (newProduct: CartProduct) => {
    const productExists = cartProducts.find((item) => item.id === newProduct.id)

    if (productExists) {
      setCartProducts((state) =>
        state.map((product) => {
          if (product.id === productExists.id) {
            const newAmount = product.amount + newProduct.amount

            return {
              ...product,
              amount: newAmount,
            }
          }
          return product
        }),
      )
      notify('Produto atualizado com sucesso', 'success')
      return
    }

    notify('Produto adicionado com sucesso', 'success')
    setCartProducts((state) => [...state, newProduct])
  }

  const rmProduct = (id: string) => {
    setCartProducts((state) => state.filter((product) => product.id !== id))
  }

  const updateProduct = (id: string, amount: number) => {
    setCartProducts((state) =>
      state.map((product) => {
        if (product.id === id) {
          return { ...product, amount }
        }
        return product
      }),
    )
  }

  const resetCart = () => {
    setCartProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        // paymentMethod,
        // shippingData,
        addProduct,
        rmProduct,
        updateProduct,
        resetCart,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {children}
    </CartContext.Provider>
  )
}

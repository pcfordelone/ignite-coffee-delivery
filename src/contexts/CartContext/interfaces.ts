export interface CartProduct {
  id: string
  name: string
  avatar: string
  amount: number
  price: number
}

export interface CartContextProps {
  // shippingData: ShippingData | undefined
  cartProducts: CartProduct[]
  // paymentMethod?: PaymentMethod
  addProduct: (product: CartProduct) => void
  rmProduct: (id: string) => void
  updateProduct: (id: string, amount: number) => void
  resetCart: () => void
}

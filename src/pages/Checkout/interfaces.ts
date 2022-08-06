import * as zod from 'zod'
import { CartProduct } from './../../contexts/CartContext/interfaces'

const ShippingFormValidationSchema = zod.object({
  formCep: zod.string(),
  formAddress: zod.string(),
  formNumber: zod.string(),
  formComplement: zod.string(),
  formDistrict: zod.string(),
  formCity: zod.string(),
  formUf: zod.string(),
})

export type ShippingFormData = zod.infer<typeof ShippingFormValidationSchema>

export type PaymentMethod = 'credit' | 'debit' | 'cash'

export interface Order {
  id: string
  shippingData: ShippingFormData
  products: CartProduct[]
  paymentMethod: PaymentMethod
}

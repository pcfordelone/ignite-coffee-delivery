import { ChangeEvent, useState } from 'react'
import cep from 'cep-promise'
import { useFormContext } from 'react-hook-form'
import { PaymentMethods } from '../PaymentMethods'

import { MapPinLine } from 'phosphor-react'
import { ShippingContainer } from './styles'
import { notify } from '../../../../utils/notification'

interface formStateData {
  formCep: string
  formAddress: string
  formNumber: string
  formComplement: string
  formDistrict: string
  formCity: string
  formUf: string
}

export const Shipping = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  const handleInputCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const editedCep = e.target.value.replace('-', '')

    if (editedCep.length === 8) {
      cep(editedCep).then((response) => {
        console.log(response)
        setValue('formAddress', response.street)
        setValue('formDistrict', response.neighborhood)
        setValue('formCity', response.city)
        setValue('formUf', response.state)
      })
    }
  }

  return (
    <ShippingContainer>
      <h1>Complete seu pedido</h1>

      <div className="shipping-info">
        <header>
          <span>
            <MapPinLine size={32} />
          </span>
          <div className="shipping-title">
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>
        <form>
          <div className="form-group">
            <input
              id="formCep"
              type="number"
              placeholder="CEP"
              {...register('formCep', { required: true })}
              onChange={handleInputCepChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-street"
              type="text"
              placeholder="Rua"
              {...register('formAddress', { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Número"
              {...register('formNumber', { required: true })}
            />
            <input
              className="form-complement"
              type="text"
              placeholder="Complemento"
              {...register('formComplement')}
            />
            <span>
              <i>Opcional</i>
            </span>
          </div>
          <div className="form-group">
            <input
              className="form-district"
              type="text"
              placeholder="Bairro"
              {...register('formDistrict', { required: true })}
            />
            <input
              className="form-city"
              type="text"
              placeholder="Cidade"
              {...register('formCity', { required: true })}
            />
            <input
              className="form-uf"
              type="text"
              placeholder="UF"
              max={2}
              {...register('formUf', { required: true })}
            />
          </div>
        </form>
      </div>
    </ShippingContainer>
  )
}

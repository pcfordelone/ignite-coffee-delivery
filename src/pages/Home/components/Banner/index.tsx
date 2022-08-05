import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import BannerImg from '../../../../assets/banner-img.png'
import { AdvantageIcon, BannerContainer } from './styles'

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <div className="bannerDescription">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>

        <div className="advantages">
          <div>
            <p>
              <AdvantageIcon variant="orange">
                <ShoppingCart className="icon" size={18} weight="fill" />
              </AdvantageIcon>
              Compra simples e segura
            </p>
            <p>
              <AdvantageIcon variant="yellow">
                <Timer className="icon" size={18} weight="fill" />
              </AdvantageIcon>
              Entrega rápida e rastreada
            </p>
          </div>
          <div>
            <p>
              <AdvantageIcon variant="gray">
                <Package className="icon" size={18} weight="fill" />
              </AdvantageIcon>
              Embalagem mantém o café intacto
            </p>
            <p>
              <AdvantageIcon variant="purple">
                <Coffee className="icon" size={18} weight="fill" />
              </AdvantageIcon>
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>
      <div className="bannerImg">
        <img src={BannerImg} alt="" />
      </div>
    </BannerContainer>
  )
}

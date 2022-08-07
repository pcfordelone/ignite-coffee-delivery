import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 70rem;
  margin: 0 auto;

  height: 34rem;
  background: url('/src/assets/home-banner-background.png') no-repeat;
  background-size: contain;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div.bannerDescription {
    padding-right: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      line-height: 2.9rem;
    }

    span {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }

  div.advantages {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 4.125rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      justify-content: center;

      p {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        font-size: 1rem;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    background-size: contain;
    padding: 2rem;

    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2rem;

    img {
      max-width: 90%;
    }

    div.bannerDescription {
      padding: 0;

      h1 {
        font-size: 2rem;
        line-height: 2rem;
      }

      span {
        font-size: 1.5rem;
        line-height: 1.625rem;
      }
    }

    div.advantages {
      display: flex;
      align-items: center;

      margin-top: 0.5rem;
    }
  }
`

export type AvantageVariants = 'orange' | 'gray' | 'yellow' | 'purple'

interface AdvantageIconProps {
  variant: AvantageVariants
}

const advantageIconVariants = {
  orange: '#C47F17',
  gray: '#574F4D',
  yellow: '#DBAC2C',
  purple: '#8047F8',
}

export const AdvantageIcon = styled.span<AdvantageIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  padding: 0.5rem;
  color: #ffffff;
  border-radius: 50%;

  ${(props) => {
    return `background-color: ${advantageIconVariants[props.variant]}`
  }}
`

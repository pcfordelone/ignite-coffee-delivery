import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 70rem;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    line-height: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-700']};
  }

  div.content {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;

    div.order-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 1.5rem;
      padding: 2rem;
      margin-right: 5.5rem;

      border: 2px solid ${(props) => props.theme['orange-500']};
      border-radius: 6px 36px 6px 36px;

      div.order-item {
        display: flex;
        gap: 0.5rem;

        p {
          font-size: 1rem;
          line-height: 1.2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin: 2rem 0;
    padding: 1rem;

    div.content {
      flex-direction: column;
      gap: 2rem;
      align-items: center;

      img {
        max-width: 90%;
      }

      div.order-info {
        width: 100%;
        padding: 2rem;
        margin: 0;
      }
    }
  }
`
export type IconVariants = 'orange' | 'gray' | 'yellow' | 'purple'

interface IconProps {
  variant: IconVariants
}

const iconVariants = {
  orange: '#C47F17',
  gray: '#574F4D',
  yellow: '#DBAC2C',
  purple: '#8047F8',
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;

  color: #ffffff;
  border-radius: 50%;

  ${(props) => {
    return `background-color: ${iconVariants[props.variant]}`
  }}
`

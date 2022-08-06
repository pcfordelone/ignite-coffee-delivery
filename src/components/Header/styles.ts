import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.5rem;

      border-radius: 8px;
      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-500']};
    }

    .cart {
      display: flex;
      align-items: center;
      padding: 0.5rem 0.5rem;
      position: relative;

      border-radius: 8px;
      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};

      .cartItemsLenght {
        position: absolute;
        top: -8px;
        right: -8px;
        width: 20px;
        height: 20px;

        background: ${(props) => props.theme['yellow-700']};
        border-radius: 50%;
        font-size: 12px;
        color: #ffffff;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 1rem;
  }
`

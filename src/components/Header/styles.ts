import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;

  img {
    max-width: 9rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      width: 2.2rem;
      height: 2.2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      background: transparent;
      border: 1.5px solid ${(props) => props.theme['gray-400']};
      border-radius: 8px;
      color: ${(props) => props.theme['gray-600']};
      padding: 0.2rem;
      cursor: pointer;

      transition: border 0.3s;

      &:hover {
        border: 1.5px solid ${(props) => props.theme['gray-700']};
      }
    }

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

    img {
      max-width: 6rem;
    }
  }
`

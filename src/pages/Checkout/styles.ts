import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-size: 2rem;
    }
  }
`

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme['yellow-700']};
    }

    h2 {
      margin-top: 0.2rem;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: ${(props) => props.theme['gray-700']};
    }
    p {
      color: ${(props) => props.theme['gray-600']};
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin: 1rem;
  }
`

export const OrderInfoContainer = styled.div`
  flex: 1;
  margin-left: 2rem;

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin: 1rem;
  }
`

export const OrderContainer = styled.div`
  margin-top: 1rem;
  flex: 1;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 8px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  div.order-totals {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-700']};

    div {
      display: flex;
      justify-content: space-between;
    }
    div.order-total {
      font-size: 1.4rem;
    }

    button {
      margin-top: 2rem;
      padding: 0.8rem;
      border: none;
      border-radius: 8px;

      background: ${(props) => props.theme['orange-400']};
      color: #ffffff;

      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  @media only screen and (max-width: 900px) {
    margin: 1rem;

    padding: 0;
    align-items: center;

    padding-bottom: 2rem;
  }
`

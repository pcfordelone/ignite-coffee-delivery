import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
  }
`

export const OrderInfoContainer = styled.div`
  flex: 1;
  margin-left: 2rem;
`

export const OrderContainer = styled.div`
  margin-top: 1rem;
  flex: 1;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 8px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  div.order-item {
    flex: 1;
    display: flex;
    gap: 1rem;
    padding: 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme['gray-500']};

    &:first-child {
      padding: 0 0 2rem 0;
    }

    img {
      width: 4rem;
      height: 4rem;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;

      div.formgroup {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        input {
          width: 4.5rem;
          padding: 0.45rem;
          border: none;
          border-radius: 8px;
          background: ${(props) => props.theme['gray-400']};
          text-align: center;
          font-size: 1rem;

          &[type='number']::-webkit-inner-spin-button,
          &[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        &::before {
          position: absolute;
          left: 0.5rem;
          content: '-';
          color: ${(props) => props.theme['purple-300']};
          font-size: 1.9rem;
          cursor: pointer;
        }
        &::after {
          position: absolute;
          left: 3.2rem;
          content: '+';
          color: ${(props) => props.theme['purple-300']};
          font-size: 1.3rem;
          cursor: pointer;
        }
      }

      button {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.6rem 0.7rem;

        border: none;
        border-radius: 8px;
        background: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-700']};
        text-transform: uppercase;
        text-align: center;
        font-size: 0.8rem;
      }
    }

    strong {
    }
  }

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
    }
  }
`

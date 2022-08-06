import styled from 'styled-components'

export const OrderItemContainer = styled.div`
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

      button.increase-amount-btn {
        padding: 0;
        background: transparent;
        border: none;
        position: absolute;
        left: 3rem;
        color: ${(props) => props.theme['purple-300']};
        font-size: 1.3rem;
        cursor: pointer;
      }
      button.decrease-amount-btn {
        padding: 0;
        background: transparent;
        border: 1.5px solid transparent;
        position: absolute;
        left: 0.7rem;
        color: ${(props) => props.theme['purple-300']};
        font-size: 1.9rem;
        cursor: pointer;
        line-height: 1.3rem;
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
      cursor: pointer;

      transition: color 0.3s;

      &:hover {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }

  strong {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    small {
      font-weight: 400;
    }
  }
`

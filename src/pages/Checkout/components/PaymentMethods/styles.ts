import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  margin-top: 1rem;
  flex: 1;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 8px;
  padding: 2.5rem;

  div.payment-methods {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button.active {
      border: 1px solid ${(props) => props.theme['purple-500']};
      background: ${(props) => props.theme['purple-100']};
    }
  }
  @media only screen and (max-width: 900px) {
    margin: 1rem;

    div.payment-methods {
      flex: 1;
      flex-direction: column;
    }
  }
`

interface ButtonProps {
  active?: boolean
}

export const Button = styled.button<ButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;

  border: 1px solid transparent;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-400']};

  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${(props) => props.theme['gray-700']};

  cursor: pointer;

  transition: border 0.3s;

  &:hover {
    border: 1px solid ${(props) => props.theme['purple-300']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['purple-300']};
    box-shadow: none;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 1rem;

    font-size: 1rem;
  }
`

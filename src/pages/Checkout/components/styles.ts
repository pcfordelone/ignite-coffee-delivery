import styled from 'styled-components'

export const ShippingContainer = styled.div`
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

  div.shipping-info {
    margin-top: 1rem;
    flex: 1;
    background: ${(props) => props.theme['gray-200']};
    border-radius: 8px;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;

    form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      div.form-group {
        display: flex;
        gap: 0.7rem;
        position: relative;

        input {
          padding: 0.5rem;
          border: 1px solid ${(props) => props.theme['gray-400']};
          border-radius: 8px;
          background: ${(props) => props.theme['gray-300']};
          color: ${(props) => props.theme['gray-800']};

          &::placeholder {
            color: ${(props) => props.theme['gray-600']};
          }
        }

        span {
          position: absolute;
          right: 1rem;
          top: 0.8rem;
          font-size: 0.8rem;
          color: ${(props) => props.theme['gray-600']};
        }

        input.form-street {
          flex: 1;
        }

        input.form-complement {
          flex: 1;
        }

        input.form-city {
          flex: 1;
        }
        input.form-uf {
          width: 10%;
        }
      }
    }
  }

  div.payment-info {
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
    }
  }
`

export const Button = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  border: 1px solid transparent;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-400']};

  text-transform: uppercase;
  font-size: 0.9rem;
  color: ${(props) => props.theme['gray-700']};

  cursor: pointer;

  transition: border 0.3s;

  &:hover {
    border: 1px solid ${(props) => props.theme['purple-300']};
  }
`

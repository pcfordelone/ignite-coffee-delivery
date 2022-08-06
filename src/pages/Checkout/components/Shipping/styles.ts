import styled from 'styled-components'

export const ShippingContainer = styled.div`
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

          &[type='number']::-webkit-inner-spin-button,
          &[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
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

    @media only screen and (max-width: 900px) {
      margin: 1rem;

      form {
        div.form-group {
          flex-direction: column;
          gap: 1rem;
          position: relative;

          input {
            padding: 1rem;
          }

          span {
            right: 1rem;
            top: 5.5rem;
            font-size: 0.8rem;
          }

          input.form-uf {
            width: 100%;
          }
        }
      }
    }
  }
`

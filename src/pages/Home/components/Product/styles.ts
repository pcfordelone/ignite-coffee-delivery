import styled from 'styled-components'

export const ProductItem = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin: 1rem;
    align-items: center;
    justify-content: center;
  }

  background: ${(props) => props.theme['gray-200']};
  border-radius: 8px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 1rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.75rem;
  }

  span {
    margin-top: 0.75rem;
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    font-weight: 700;
    padding: 0.1rem 0.5rem;
    border-radius: 1rem;
  }

  strong {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.5rem;
    text-align: center;
    line-height: 1.2rem;
    color: ${(props) => props.theme['gray-600']};
  }

  div.footer {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    padding: 0 0.7rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 900px) {
      flex-direction: column;
      gap: 0.5rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${(props) => props.theme['gray-700']};

      small {
        font-weight: 400;
        font-size: 0.9rem;
        color: ${(props) => props.theme['gray-600']};
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      div.formgroup {
        position: relative;

        input {
          width: 4.5rem;
          padding: 0.65rem;
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
          background: transparent;
          border: none;
          position: absolute;
          right: 0.5rem;
          color: ${(props) => props.theme['purple-300']};
          font-size: 1.3rem;
          cursor: pointer;
        }
        button.decrease-amount-btn {
          background: transparent;
          border: none;
          position: absolute;
          left: 0.5rem;
          color: ${(props) => props.theme['purple-300']};
          font-size: 1.9rem;
          cursor: pointer;
          line-height: 1.3rem;
        }
      }

      button.add-item-cart {
        width: 2.375rem;
        height: 2.375rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 4px;
        background: ${(props) => props.theme['purple-500']};
        color: #ffffff;
        cursor: pointer;

        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`

import styled from 'styled-components'

export const ProductsContainer = styled.div`
  width: 70rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  div.productsContainer {
    margin-top: 2.5rem;
    margin-bottom: 15rem;
    display: flex;
    gap: 2rem;
  }
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

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

    p {
      font-size: 1.5rem;
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
          right: 0.5rem;
          content: '+';
          color: ${(props) => props.theme['purple-300']};
          font-size: 1.3rem;
          cursor: pointer;
        }
        &::after {
          position: absolute;
          left: 0.5rem;
          content: '-';
          color: ${(props) => props.theme['purple-300']};
          font-size: 1.9rem;
          cursor: pointer;
        }
      }

      button {
        width: 2.375rem;
        height: 2.375rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 4px;
        background: ${(props) => props.theme['purple-500']};
        color: #ffffff;
      }
    }
  }
`

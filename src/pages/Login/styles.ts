import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  padding: 0 1rem;

  .row {
    height: 100vh;
    padding: 7.5rem 0 9.1875rem 0;

    .card {
      display: flex;
      justify-content: flex-end;
    }

    @media (max-width: 768px) {
      padding-top: 2.5rem;
      justify-content: center !important;
    }
  }

  @media (max-width: 876px) {
    padding: 0 2rem;
  }

  @media (max-width: 468px) {
    padding: 0 1.5rem;
  }
`;

export const TextContent = styled.div`
  max-width: 410px;

  img {
    margin-bottom: 1.375rem;
  }

  h1 {
    font-size: 3.375rem;
    font-weight: bold;

    color: var(--gray-200);
    margin-bottom: 1.375rem;
  }

  p {
    font-size: 1.125rem;
    color: var(--gray-900);
  }

  @media (max-width: 876px) {
    max-width: 380px !important;

    h1 {
      font-size: calc(3.375rem - 0.7rem);
    }

    p {
      max-width: 350px !important;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    max-width: auto !important;

    margin-left: -6rem;
    margin-bottom: 2rem;

    p {
      display: none;
    }
  }

  @media (max-width: 530px) {
    margin-left: -2rem;
  }

  @media (max-width: 468px) {
    margin-left: -10rem;
    margin-bottom: 1rem;

    h1 {
      display: none;
    }
  }
`;

export const AuthCard = styled.div`
  width: 30rem;
  height: 27rem;

  background: var(--dark-800);
  border-radius: 6px;

  padding: 4rem;

  @media (max-width: 876px) {
    padding: 3rem;

    height: 24rem;
  }

  @media (max-width: 468px) {
    padding: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    height: 50px;
    background: var(--dark-900);
    border: none;
    outline: none;
  }

  .ant-input-affix-wrapper {
    height: 50px;

    border: none;

    background: var(--dark-900) !important;
    border-radius: 5px;
    outline: none;

    input {
      height: 100% !important;
      color: var(--gray-900) !important;

      font-size: 12px !important;
      padding: 0 0.6rem;
      font-weight: 400 !important;

      ::placeholder {
        color: var(--gray-900) !important;
      }
    }

    .ant-input-prefix {
      svg {
        fill: #333333 !important;
      }
    }
  }

  .ant-input-affix-wrapper-focused {
    border: 1px solid var(--primary-color);
    box-shadow: none !important;

    transition: 0 !important;

    .ant-input-prefix {
      svg {
        fill: var(--primary-color) !important;
      }
    }

    :hover {
      border: 1px solid var(--primary-color);
    }
  }
`;

export const PassContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 14px;
    margin-top: 8px;
    color: #723dec;
    font-weight: 600;
    filter: brightness(0.8);

    transition: 0.2s;

    :hover {
      filter: brightness(1);
    }
  }

  margin-bottom: 1.5rem;
`;

export const FormBottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    weight: 100% !important;
    border: none;
    border-radius: 5px;
    background: var(--primary-color);

    height: 50px;
    font-size: 1rem !important;
    font-weight: bold !important;

    :hover {
      background: var(--primary-color);
      filter: brightness(0.8);
    }

    :focus {
      background: var(--primary-color);
      filter: brightness(0.8);
    }

    margin-bottom: 1.5rem;
  }

  .register {
    align-self: center;
    color: var(--gray-900);

    a {
      margin-left: 4px;
      font-size: 14px;
      color: #723dec;
      font-weight: 600;
      filter: brightness(0.8);

      transition: 0.2s;

      :hover {
        filter: brightness(1);
      }
    }
  }

  @media (max-width: 468px) {
    button {
      font-size: 14px !important;
    }

    .register {
      font-size: 12px !important;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .row {
    height: 100vh;
    padding: 7.5rem 0 9.1875rem 0;

    .card {
      display: flex;
      justify-content: flex-end;
    }
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
`;

export const AuthCard = styled.div`
  width: 30rem;
  height: 27rem;

  background: var(--dark-800);
  border-radius: 6px;

  padding: 4rem;
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
`;

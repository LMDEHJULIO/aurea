import styled from "styled-components";

export const SubscribeFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;

  .form-bottom {
    margin-top: 3rem;
  }

  .checkbox-container {
    display: flex;
    text-align: left;
    align-items: baseline;
    margin-bottom: 2rem;

    input {
      margin-right: 0.5rem;
    }

    p {
      color: grey;
      font-size: 1.5rem;
    }
  }

  input[type="text"],
  input[type="email"] {
    height: 2rem;
    padding: 2.5rem;
    border: solid 1px #cecece;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  input[type="submit"] {
    background-color: grey;
    width: 23rem;
    margin: 0 auto;
    color: white;
    padding: 2rem;
    border: 0;
  }

  .form--add-to-cart {
    &__input {
      background-color: #eee;
      border: solid 1px #c8c8c8;
      padding: 1.4rem 1rem;
      border-radius: 0.2rem;
      max-width: 6rem;
      margin-right: 1rem;
    }
  }
`;

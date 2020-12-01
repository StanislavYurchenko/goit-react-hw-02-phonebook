import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, 0.3);
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  border-bottom: 1px solid rgba(0, 0, 255, 0.3);
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, 0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  transition: all 0.3s linear;
  background-color: #fff;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;

  :hover:not(:disabled) {
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    border: 1px solid rgba(0, 0, 255, 1);
  }
  :disabled {
    cursor: default;
  }
`;

export const H1 = styled.h1`
  margin: 0 0 25px;
`;

export const H2 = styled.h2`
  margin: 0 0 16px;
`;

export const H3 = styled.h3`
  margin: 0 0 2px;
`;

export const InputText = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 255, 0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  transition: all 0.3s linear;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  :focus {
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    border-bottom: 1px solid rgba(0, 0, 255, 1);
  }

  ::placeholder {
    font-family: sans-serif;
  }

  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const ListContact = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 100%;
  list-style: none;

  :not(:last-child) {
    padding-bottom: 10px;
  }
`;

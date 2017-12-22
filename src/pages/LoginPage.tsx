import * as React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import Input from '../components/TextInput';
import Button from '../components/Button';
import Overlay from '../components/Overlay';

const home = require('../assets/home.svg');
const loader = require('../assets/loader.svg');

const LoginPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.span`
  top: 50px;
  font-family: ${props => props.theme.fontTitle};
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 10px;
  min-height: 50px;
  color: #6f78c5;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};
  border-radius: 10px;
  width: 25%;
  height: 25%;
  
  & > div:not(:last-child) {
    margin-bottom: 4px;
  }
  
  & > div:nth-child(3) {
    margin-top: 5px;
  }
  
  @media (max-width: 768px) {
    height: 40%;
    width: 75%;
  }
`;

const LoginPage = ({ 
  email,
  password,
  changeCredentials,
  login,
  loginError,
  loading
}: { 
  email: string,
  password: string,
  changeCredentials: (value: string, field: 'email' | 'password') => void,
  login: Function,
  loginError: boolean,
  loading: boolean
}) => (
  <LoginPageWrapper>
    <Header>
      <Typist cursor={{ show: false }}>
        <Typist.Delay ms={650} />
        <img src={home} /> Houseworks
      </Typist>
    </Header>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      {
        loading ? (
          <Overlay borderRadius={10}>
            <img src={loader} />
          </Overlay>
        ) : null
      }
      <Input
        onChange={e => {
          e.preventDefault();
          changeCredentials(e.target.value, 'email');
        }}
        type="email"
        placeholder="email"
        value={email}
        required={true}
      />
      <Input
        onChange={e => changeCredentials(e.target.value, 'password')}
        type="password"
        placeholder="password"
        value={password}
        required={true}
      />
      <Button style={{ margin: 2 }} type="submit">Login</Button>

    </Form>
  </LoginPageWrapper>
);

export default LoginPage;
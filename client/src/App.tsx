import React, { useState } from 'react';
import './App.scss';
import LoginForm from './components/LoginForm';
import Modal from './UI/Modal/Modal';

function App() {
  const [active, setActive] = useState(true);
  const [loginFormType, setLoginFormType] = useState<'sign-up' | 'sign-in'>(
    'sign-up'
  );

  return (
    <Modal active={active} setActive={setActive}>
      <LoginForm type={loginFormType} setType={setLoginFormType} />
    </Modal>
  );
}

export default App;

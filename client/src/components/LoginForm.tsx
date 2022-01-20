import React, { FC, FormEvent, useContext, useRef } from 'react';
import { AppContext } from '..';
import Btn from '../UI/Btn/Btn';
import Input from '../UI/Input/Input';
import './LoginForm.scss';
import { Props } from './types';
import { loginFormService } from './LoginForm.service';

const LoginForm: FC<Props> = ({ type, setType }) => {
  const { userStore } = useContext(AppContext);
  const inputs = [
    <Input name='email' type='email' placeholder='Email address' />,
    <Input name='password' type='password' placeholder='Password' />,
  ];

  return (
    <form
      className='login-form'
      onSubmit={(e) =>
        type === 'sign-up'
          ? loginFormService.signUp(e, userStore)
          : 'Sign up'
      }
    >
      <h2 className='text login-form__title'>
        {type === 'sign-up' ? 'Create An Account' : 'Welcome back!'}
      </h2>
      <ul className='list'>
        {inputs.map((input) => (
          <li>{input}</li>
        ))}
      </ul>
      <Btn
        type='submit'
        text={type === 'sign-up' ? 'Sign up' : 'Sign in'}
        className='login-form__btn'
      />
      <p className='text'>
        {type === 'sign-up'
          ? 'Already Have An Account? '
          : "Don't have an account? "}
        <a
          className='link'
          href='#'
          onClick={() =>
            type === 'sign-up' ? setType('sign-in') : setType('sign-up')
          }
        >
          {type === 'sign-up' ? 'Sign in' : 'Sign up'}
        </a>
      </p>
    </form>
  );
};

export default LoginForm;

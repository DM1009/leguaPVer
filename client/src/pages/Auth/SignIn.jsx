import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function SignIn() {
  return (
    <div className='w-4/5 md:w-1/5 my-20 items-center j mx-auto'>
      <Form>
        <Form.Group className='mb-3 font-bold' controlId='formBasicEmail'>
          <Form.Label>이메일 아이디</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3 font-bold' controlId='formBasicPassword'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        {/* 로그인 유지 체크박스 */}
        {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group> */}
        <div className='text-center'>
          <button
            className='bg-brand text-white font-bold py-2 px-3 mt-4 rounded'
            type='submit'
          >
            로그인
          </button>
        </div>
      </Form>
    </div>
  );
}

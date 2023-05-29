import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function SignUp() {
  return (
    <div>
      <div className='w-4/5 md:w-1/5 my-20 items-center mx-auto'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>프로필 사진</Form.Label>
            <Form.Control type='file' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='위의 약관에 동의합니다' />
          </Form.Group>
          <div className='text-center'>
            <button
              className='bg-brand2 text-white font-bold py-2 px-3 rounded'
              type='submit'
            >
              회원 가입
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

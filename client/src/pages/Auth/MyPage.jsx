import React from 'react';
import { Link } from 'react-router-dom';

export default function MyPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='mt-24 mb-12 md:my-10 font-extrabold text-2xl'>
        로그인 후 이용 가능합니다
      </h1>
      <Link to={'/sign/in'}>
        <button className='bg-brand px-4 py-2 rounded-lg text-white font-bold text-2xl'>
          로그인
        </button>
      </Link>
    </div>
  );
}

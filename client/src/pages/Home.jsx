import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const buttonStyle =
    'border-2 px-1 rounded-xl hover:bg-bdbg text-base font-bold mx-1 cursor-pointer'
  return (
    <div className=''>
      <div className='flex flex-col'>
        <h1 className='text-2xl pt-20 md:ml-96 ml-6 md:text-4xl font-Title leading-6'>
          원하는 과외 & 레슨 선생님을 <p />
          찾아 드립니다!
        </h1>
      </div>
      <div className='flex flex-col pt-20 md:ml-96'>
        <h1 className='ml-1 text-2xl font-bold'>
          어떤 선생님을 찾고 계신가요?
        </h1>
        <div className='my-2'>
          <Link to={`https://localhost:3000/do/lesson/sub/피아노`}>
            <button className={`${buttonStyle} text-black`}>🎹피아노</button>
          </Link>
          <Link to={`https://localhost:3000/do/lesson/sub/바이올린`}>
            <button className={`${buttonStyle} text-black`}>🎻바이올린</button>
          </Link>
          <Link to={`https://localhost:3000/do/lesson/sub/기타`}>
            <button className={`${buttonStyle} text-black`}>🎸기타</button>
          </Link>
        </div>

        <div className='my-2'>
          <Link to={`https://localhost:3000/do/tutorial/sub/수학`}>
            <button className={`${buttonStyle} text-black`}>📕수학</button>
          </Link>
          <Link to={`https://localhost:3000/do/tutorial/sub/영어`}>
            <button className={`${buttonStyle} text-black`}>📘영어</button>
          </Link>
          <Link to={`https://localhost:3000/do/tutorial/sub/초등학생`}>
            <button className={`${buttonStyle} text-black`}>🚌초등학생</button>
          </Link>
          <Link to={`https://localhost:3000/do/tutorial/sub/중학생`}>
            <button className={`${buttonStyle} text-black`}>🏫중학생</button>
          </Link>
        </div>
        <div className='my-2'>
          <Link to={`https://localhost:3000/do/tutorial/sub/고등학생`}>
            <button className={`${buttonStyle} text-black`}>📖고등학생</button>
          </Link>
          <Link to={`https://localhost:3000/do/tutorial/sub/수능 과외`}>
            <button className={`${buttonStyle} text-black`}>📚수능과외</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

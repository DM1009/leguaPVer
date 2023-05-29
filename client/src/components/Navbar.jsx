import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [lessonMenu, setLessonMenu] = useState(false)
  const handleLessonMenuEnter = () => {
    setLessonMenu(true)
  }
  const handleLessonMenuLeave = () => {
    setLessonMenu(false)
  }

  const [tutoringMenu, setTutoringMenu] = useState(false)
  const handleTutoringMenuEnter = () => {
    setTutoringMenu(true)
  }
  const handleTutoringMenuLeave = () => {
    setTutoringMenu(false)
  }
  return (
    <div className='w-full bg-white fixed flex flex-col md:flex-row justify-between items-center border-2 z-99'>
      <div className='md:ml-4 my-2 '>
        <Link className='no-underline' to='/'>
          <img
            className='w-8 md:w-16 my-2 md:my-0 rounded-md md:rounded-xl'
            src='/assets/Logo.png'
            alt=''
          />
        </Link>
      </div>

      <div className='flex md:ml-72 my-2 md:my-0'>
        <div
          className='mr-2 flex flex-col items-center justify-center'
          onMouseEnter={handleLessonMenuEnter}
          onMouseLeave={handleLessonMenuLeave}
        >
          <h1 className='relative text-base md:text-lg px-2 md:ml-2 text-black cursor-default'>
            레슨 찾기
          </h1>
          {lessonMenu && (
            <div className='absolute top-12 border-2 bg-white rounded-xl items-center justify-center text-center mt-16 md:mt-2'>
              <ul className='px-2 my-2'>
                <li className='my-2'>
                  <Link className='no-underline text-black' to='/look/lesson'>
                    학생 찾기
                  </Link>
                </li>
                <li>
                  <Link className='no-underline text-black' to='/do/lesson'>
                    선생님 찾기
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className='mr-2 flex flex-col items-center justify-center'
          onMouseEnter={handleTutoringMenuEnter}
          onMouseLeave={handleTutoringMenuLeave}
        >
          <h1 className='relative text-base md:text-lg px-2 md:ml-2 text-black cursor-default'>
            과외 찾기
          </h1>
          {tutoringMenu && (
            <div className='absolute top-12 border-2 bg-white rounded-xl items-center justify-center text-center mt-16 md:mt-2'>
              <ul className='px-2 my-2'>
                <li className='my-2'>
                  <Link className='no-underline text-black' to='/look/tutorial'>
                    학생 찾기
                  </Link>
                </li>
                <li>
                  <Link className='no-underline text-black' to='/do/tutorial'>
                    선생님 찾기
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link className='no-underline' to={'/mypage'}>
          <h1 className='relative text-base md:text-lg md:ml-2 text-black cursor-pointer'>
            마이 페이지
          </h1>
        </Link>
      </div>
      <div className='flex text-right ml-64'>
        <Link className='no-underline' to={'/sign/in'}>
          <h1 className='text-base mx-2 cursor-pointer'>로그인</h1>
        </Link>
        <Link className='no-underline' to={'/sign/up'}>
          <h1 className='text-base md:ml-2 md:mr-10 cursor-pointer'>
            회원가입
          </h1>
        </Link>
      </div>

      <div className='ocean absolute bg-white left-0 right-0 bottom-0 z-98'>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
      </div>
    </div>
  )
}
